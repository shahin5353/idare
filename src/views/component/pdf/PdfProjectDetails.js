import React, { useEffect, useState } from 'react'
import { Page, View, Document, StyleSheet, PDFDownloadLink, Font, Text } from '@react-pdf/renderer'
import { ButtonMildGreen } from '../buttons/Buttons'
import { PrinterFilled } from '@ant-design/icons'

const PdfProjectDetails = (props) => {
    const [ready, setReady] = useState(false)
    const [click, setClick] = useState(false)
    useEffect(() => {
        click && document.getElementById('autoClickBtn').click()
        setReady(false)
        setClick(false)
    }, [click])
    return !ready ? (
        <ButtonMildGreen
            onClick={() => setReady(true)}
            text={'PDF'}
            icon={<PrinterFilled />}
        />
    ) : (
        props.data.length && (
            <PDFDownloadLink
                document={
                    <PDFDocument
                        data={props.data}
                    />
                }
                fileName={`Project Details`}
            >
                {({ blob, url, loading, error }) =>
                    loading ? (
                        <ButtonMildGreen text={'Loading'} icon={'printer'} />
                    ) : (
                        <a target='_blank' href={url} id='autoClickBtn' rel='noreferrer'>
                            <ButtonMildGreen text={'PDF'} icon={'printer'} />
                            {setClick(true)}
                        </a>
                    )
                }
            </PDFDownloadLink>
        )
    )
}

export default PdfProjectDetails

function PDFDocument(props) {
    return (
        <Document>
            <Page size='A4' style={styles.body}>
                <View wrap={false}>
                    <Text style={styles.header}>Project Overview</Text>
                    <View style={styles.horizontalDivider}></View>
                    {
                        props.data.map((item, index) => <>
                            <Text style={styles.normalText}>Project Name: {item.projectName}</Text>
                            <Text style={styles.normalText}>Description: {item.projectDescription}</Text>
                            <Text style={styles.normalText}>Client: {item.client}</Text>
                            <Text style={styles.normalText}>Contructor: {item.contructor}</Text>
                            <Text style={styles.normalText}>Max X: {item.max_X}</Text>
                            <Text style={styles.normalText}>Max Y: {item.max_Y}</Text>
                            <Text style={styles.normalText}>Max Z: {item.max_Z}</Text>
                            <Text style={styles.normalText}>Min X: {item.min_X}</Text>
                            <Text style={styles.normalText}>Min Y: {item.min_Y}</Text>
                            <Text style={styles.normalText}>Min Z: {item.min_Z}</Text>
                        </>
                        )
                    }
                </View>
            </Page>
        </Document>
    )
}
const styles = StyleSheet.create({
    body: {
        fontFamily: 'Times-Roman',
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 25
    },
    header: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10
    },
    normalText: {
        fontSize: 14,
        textAlign: 'left',
        paddingBottom: 5
    },
    horizontalDivider: {
        width: '100%',
        borderBottomWidth: 1,
        marginBottom: 10
    },
})
