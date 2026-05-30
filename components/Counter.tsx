import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/hooks';
import { RootState } from '../store/store';
import { decrement, fetchPostsCount, increment } from '../store/counter.slice';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const status = useSelector((state: RootState) => state.counter.status);
  const error = useSelector((state: RootState) => state.counter.error);

  return (
    <View style={styles.card}>
      
      {/* Header Profile */}
      <View style={styles.header}>
        <Text style={styles.title}>Axell</Text>
        <Text style={styles.subtitle}>00000112638</Text>
      </View>

      {/* Tampilan Angka Counter */}
      <View style={styles.countContainer}>
        <Text style={styles.countLabel}>Total Count</Text>
        <Text style={styles.countValue}>{count}</Text>
      </View>

      {/* Indikator Status Loading/Error */}
      <View style={styles.statusContainer}>
        {status === 'loading' && (
          <>
            <ActivityIndicator size="small" color="#B5BAFF" />
            <Text style={styles.loadingText}>Mengambil data API...</Text>
          </>
        )}
        {error && <Text style={styles.errorText}>Gagal: {error}</Text>}
        {status === 'succeeded' && <Text style={styles.successText}>Data berhasil di-fetch!</Text>}
      </View>

      {/* Tombol-tombol Aksi */}
      <View style={styles.buttonContainer}>
        
        {/* Tombol Plus & Minus dibariskan */}
        <View style={styles.rowButtons}>
          <TouchableOpacity 
            style={[styles.button, styles.decrementBtn]} 
            onPress={() => dispatch(decrement())}
          >
            <Text style={styles.decrementText}>- Kurang</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.incrementBtn]} 
            onPress={() => dispatch(increment())}
          >
            <Text style={styles.buttonText}>+ Tambah</Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Fetch di baris bawah full lebar */}
        <TouchableOpacity 
          style={[styles.button, styles.fetchBtn, status === 'loading' && styles.disabledBtn]} 
          onPress={() => dispatch(fetchPostsCount())}
          disabled={status === 'loading'}
        >
          <Text style={styles.buttonText}>
            {status === 'loading' ? 'Memproses...' : 'Fetch Posts dari API'}
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 20,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 16,
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9FA1FF',
  },
  subtitle: {
    fontSize: 14,
    color: '#B5BAFF',
    marginTop: 4,
  },
  countContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  countLabel: {
    fontSize: 12,
    color: '#B5BAFF',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  countValue: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#9FA1FF',
    marginVertical: 8,
  },
  statusContainer: {
    height: 24, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loadingText: {
    marginLeft: 8,
    color: '#6B7280',
    fontSize: 13,
    fontStyle: 'italic',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 13,
  },
  successText: {
    color: '#9FA1FF',
    fontSize: 13,
  },
  buttonContainer: {
    width: '100%',
    gap: 12, 
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12, 
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  incrementBtn: {
    backgroundColor: '#9FA1FF',
  },
  decrementBtn: {
    backgroundColor: '#B5BAFF',
    borderWidth: 1,
    borderColor: '#B5BAFF',
  },
  fetchBtn: {
    backgroundColor: '#D9F9DF',
    width: '100%',
  },
  disabledBtn: {
    backgroundColor: '#9CA3AF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  decrementText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Counter;