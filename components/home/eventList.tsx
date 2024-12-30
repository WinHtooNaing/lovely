import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Event } from "../../app/home/index";
import EventItem from "./eventItem";

type EventListProps = {
  events: Event[];
  deleteEvent: (id: string) => void;
};
const EventList = ({ events, deleteEvent }: EventListProps) => {
  const sortedEvents = events.sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedEvents}
        renderItem={({ item }) => (
          <EventItem event={item} deleteEvent={deleteEvent} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: "100%",
    padding: 16,
  },
});
