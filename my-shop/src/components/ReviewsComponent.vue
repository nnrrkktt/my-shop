<template>
    <div>
        <h2>Відгуки</h2>
    </div>
    <table>
<thead>

<tr>

<th>Im'n</th>

<th>Рейтинг </th>

<th>Коментар</th>

</tr>

</thead>

<tbody>

<tr v-for= "(review, index) in reviews" :key="index">

<td>{{ review.Name }}</td>

<td>{{ review.Rating }}</td>

<td>{{ review.Comment }}</td>

</tr>

</tbody>

</table>
</template>