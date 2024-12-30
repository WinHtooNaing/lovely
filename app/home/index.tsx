import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import EventInput from "../../components/home/eventInput";
import { getData, storeData } from "../../utils/storage";
import SpecialIcon from "../../components/home/specialIcon";
import EventList from "../../components/home/eventList";

const KEY = "@events";

export type Event = {
  id: string;
  name: string;
  date: Date;
};

const index = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const addNewEvent = async (event: Event) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    await storeData(KEY, updatedEvents);
  };

  const deleteEvent = async (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const updatedEvents = events.filter((ev) => ev.id !== id);
    setEvents(updatedEvents);
    await storeData(KEY, updatedEvents);
  };

  useEffect(() => {
    const getEvents = async () => {
      const eventData: Event[] = await getData(KEY);
      if (eventData) {
        const parsedData = eventData.map((ev: Event) => ({
          ...ev,
          date: new Date(ev.date),
        }));
        setEvents(parsedData);
      }
    };

    getEvents();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <EventInput addNewEvent={addNewEvent} />
          <SpecialIcon />
          <EventList events={events} deleteEvent={deleteEvent} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
});
