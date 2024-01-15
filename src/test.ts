import { ref } from 'vue';

export function desctruct() {
  // a-h
  const d = [{
    label: 'fasdfasdf',
    value: '',
  }];

  const o = [{
    label: 'a',
    value: 'a',
  },
  {
    label: 'b',
    value: 'b',
  },
  {
    label: 'c',
    value: 'c',
  },
  {
    label: 'd',
    value: 'd',
  },
  {
    label: 'e',
    value: 'e',
  },
  {
    label: 'f',
    value: 'f',
  },
  {
    label: 'g',
    value: 'g',
  },
  {
    label: 'h',
    value: 'h',
  }];

  const allNs = [...d, ...o];

  console.log(allNs);
}

const asyncPost = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await res.json();

    
    console.log(json);
    return json;
  } catch (e) {
    console.error(e);
  }
}

export const queryNamespacesTest = async (defaultNs?: string) => {
  try {
    const res = await asyncPost();

    console.log('DEBUG---------------');

    const nsList = ref([
      ...defaultNs ? [{
        label: '',
        value: '',
      }] : [],
      ...res.namespaces?.map((ns) => ({
        label: ns.name,
        value: ns.name,
      })) ?? [],
    ]);
    const target = nsList.value.find((ns) => ns.value === defaultNs);

    desctruct();

    console.log(target);

    console.log(nsList.value);
  } catch (e) {
    console.error(e);
  }
};
