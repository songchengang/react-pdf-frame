import React, {Component} from 'react'
import Sample from './Sample';
import { PDFViewer } from '@react-pdf/renderer';

import './index.css'

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


export default class Pdf extends Component{
    render(){
        return(
            <div className="pdf-wrap" id="pdf-container">
                  {/* <PDFViewer>
                  <Document>
                        <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text>Section #1</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Section #2</Text>
                        </View>
                        </Page>
                    </Document>
                  </PDFViewer> */}

                
            </div>
        )
    }
}