import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Period from './PeriodView';

const DayViewComponent = ({ day, dayNum }) => {
    const { dayStyle, containerStyle } = styles;

    let dayStr = "";
    console.log("INdex: " + dayNum)
    switch (dayNum) {
        case 0:
            dayStr = "Monday";
            break;
        case 1:
            dayStr = "Tuesday";
            break;
        case 2:
            dayStr = "Wednesday";
            break;
        case 3:
            dayStr = "Thursday";
            break;
        case 4:
            dayStr = "Friday";
            break;
        case 5:
            dayStr = "Saturday";
            break;
        default:
            //We should technicaly never get here.
            break;
    }

    return (
        <ScrollView style={containerStyle}>
            <Text style={dayStyle}>{dayStr}</Text>
            <Period title={day.firstPeriod.Title} room={day.firstPeriod.Room} time="08:00-10:00" />
            <Period title={day.secondPeriod.Title} room={day.secondPeriod.Room} time="10:00-12:00" />
            <Period title={day.thirdPeriod.Title} room={day.thirdPeriod.Room} time="13:30-15:30" />
            <Period title={day.fourthPeriod.Title} room={day.fourthPeriod.Room} time="15:30-17:30" />
            <Period title={day.fifthPeriod.Title} room={day.fifthPeriod.Room} time="18:30-19:30" />
            <Period title={day.sixthPeriod.Title} room={day.sixthPeriod.Room} time="19:30-20:30" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingBottom: 20,
        paddingTop: 20
    },
    headerTextStyle: {
        fontSize: 18
    },
    roomNumberStyle: {
        alignSelf: 'flex-end'
    },
    dayStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 5
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default DayViewComponent;