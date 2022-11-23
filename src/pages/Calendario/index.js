import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul.',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    dayNames: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje',
  };
  LocaleConfig.defaultLocale = 'pt-br';
  new Date().getFullYear()
  
  export { LocaleConfig };

import HeaderPages from '../../components/HeaderPages';

export default function Calendario(){
    return(
        <View style={styles.container}>
            <Calendar 
            // Collection of dates that have to be marked. Default = {}
                markedDates={{
                    '2022-01-01': {marked: true, dotColor:'#ff0000'},
                    '2022-01-30': {marked: true, dotColor:'#ff0000'},

                    '2022-02-17': {marked: true, dotColor:'#ff0000'},

                    '2022-03-01': {marked: true, dotColor:'#ff0000'},
                    '2022-03-02': {marked: true, dotColor:'#ff0000'},
                    '2022-03-08': {marked: true, dotColor:'#ff0000'},

                    '2022-04-15': {marked: true, dotColor:'#ff0000'},
                    '2022-04-17': {marked: true, dotColor:'#ff0000'},
                    '2022-04-18': {marked: true, dotColor:'#ff0000'},
                    '2022-04-19': {marked: true, dotColor:'#ff0000'},
                    '2022-04-21': {marked: true, dotColor:'#ff0000'},
                    '2022-04-24': {marked: true, dotColor:'#ff0000'},

                    '2022-05-01': {marked: true, dotColor:'#ff0000'},
                    '2022-05-08': {marked: true, dotColor:'#ff0000'},
                    '2022-05-25': {marked: true, dotColor:'#ff0000'},

                    '2022-06-12': {marked: true, dotColor:'#ff0000'},
                    '2022-06-16': {marked: true, dotColor:'#ff0000'},
                    '2022-06-19': {marked: true, dotColor:'#ff0000'},
                    '2022-06-24': {marked: true, dotColor:'#ff0000'},

                    '2022-07-09': {marked: true, dotColor:'#ff0000'},

                    '2022-08-14': {marked: true, dotColor:'#ff0000'},

                    '2022-09-07': {marked: true, dotColor:'#ff0000'},
                    '2022-09-09': {marked: true, dotColor:'#ff0000'},
                    '2022-09-12': {marked: true, dotColor:'#ff0000'},
                    '2022-09-15': {marked: true, dotColor:'#ff0000'},

                    '2022-10-12': {marked: true, dotColor:'#ff0000'},
                    '2022-10-04': {marked: true, dotColor:'#ff0000'},

                    '2022-11-01': {marked: true, dotColor:'#ff0000'},
                    '2022-11-02': {marked: true, dotColor:'#ff0000'},
                    '2022-11-15': {marked: true, dotColor:'#ff0000'},
                    '2022-11-20': {marked: true, dotColor:'#ff0000'},

                    '2022-12-08': {marked: true, dotColor:'#ff0000'},
                    '2022-12-25': {marked: true, dotColor:'#ff0000'},
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor:'#fff',
  }
})