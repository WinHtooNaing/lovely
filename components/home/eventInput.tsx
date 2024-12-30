import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Event } from "../../app/home/index";

import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type EventInputProps = {
  addNewEvent: ({ name, date }: Event) => void;
};
const EventInput = ({ addNewEvent }: EventInputProps) => {
  const [eventName, setEventName] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const datePickerHandler = (e: DateTimePickerEvent, d: Date | undefined) => {
    if (e.type === "set") {
      const currentDate = d || date;
      if (currentDate < new Date()) {
        setDate(currentDate);
      } else {
        Alert.alert("Invalid date", "Please select a future date");
      }
    }
    setShowPicker(false);
  };

  const addNewEventHandler = () => {
    if (eventName.trim().length === 0) {
      Alert.alert("Required", "Please enter a name for the event");
      return;
    }

    addNewEvent({
      name: eventName,
      date,
      id: Math.random().toString(),
    });
    setEventName("");
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let! Create</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.eventInput}
          placeholder="Enter our day"
          value={eventName}
          onChangeText={setEventName}
        />

        <Pressable
          onPress={() => setShowPicker(true)}
          hitSlop={20}
          style={styles.icon}
        >
          <AntDesign name="calendar" size={30} color="#fff" />
        </Pressable>
      </View>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={datePickerHandler}
        />
      )}

      <Pressable onPress={addNewEventHandler} style={styles.btnSubmit}>
        <Text style={[styles.btnText]}>Create</Text>
      </Pressable>
    </View>
  );
};

export default EventInput;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    width: "100%",
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    gap: 6,
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: "#e76f51",
    color: "#fff",
    borderRadius: 6,
    marginTop: 10,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
    backgroundColor: "#e76f51",
    padding: 10,
    borderRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  eventInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
  },
});
