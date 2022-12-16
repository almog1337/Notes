import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { getRandomInterval, getRandomNote } from '../helper';
import { Interval, Intervals } from '../types/intervals';
import { Note, Notes } from '../types/notes';
import { style } from './style';

export default function IntervalIdentify() {
    const [note, setNote] = useState<Note>(getRandomNote());
    const [interval, setInterval] = useState<Interval>(getRandomInterval());
    const [roundFinished, setRoundFinished] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const onPressSubmit = useCallback(() => {
        if(input) {
            setRoundFinished(true);
            setNote(getRandomNote());
            setInterval(getRandomInterval());
        }
    }, [note, interval, input]);
    const onPressNext = () => {
        setRoundFinished(false);
    };
    const isInputCorrect = useMemo<boolean>(() => {
        if(!input) return false;
        const index = Notes.indexOf(input);
        if(!index) return false;
        return Intervals.get(index)?.shortName === interval.shortName;
    }, [note, interval, input]);
    return(
        <View style={style.game}>
            <View style={style.question}>
                <Text style={style.text}> {note} </Text>
                <Text style={style.text}> {interval.shortName} </Text>
            </View>

            {!roundFinished &&
            <>
                <View style={style.answer}>
                    <TextInput
                        style={style.input}
                        onChangeText={setInput}
                        placeholder={"Enter Note"}
                        placeholderTextColor={"rgb(188, 183, 174)"}>
                        {input}
                    </TextInput>
                    <Pressable style={style.button} onPress={onPressSubmit}>
                        <Text style={style.buttonText}>submit</Text>
                    </Pressable>
                </View>
            </>}

            {roundFinished && isInputCorrect &&
                <Text style={style.CorrectText}>Correct</Text>
            }
            {roundFinished && !isInputCorrect &&
                <Text style={style.FalseText} >False</Text>
            }
            {roundFinished &&
                <Pressable style={style.button} onPress={onPressNext}>
                    <Text style={style.buttonText}>Next</Text>
                </Pressable>
            }
        </View>
    );
}