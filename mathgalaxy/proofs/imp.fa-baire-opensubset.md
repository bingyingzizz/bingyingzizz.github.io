# Baire $\implies$ 开子集是 Baire
`imp.fa-baire-opensubset` · 推出 · strong 边 · 根 `../`

`thm.baire` Baire 纲定理 → `thm.baire-open-subset` Baire 的开子集是 Baire

设 $O_n$ 在 $\Omega$ 中稠密开，写 $O_n = \Omega \cap O_n'$（$O_n'$ 在 $X$ 中开）。
断言 $O_n' \cup \Omega^c$ 在 $X$ 中稠密：任取非空开 $U$，若 $U \cap \Omega = \emptyset$ 则 $U \subseteq \Omega^c$；否则 $U \cap \Omega$ 是 $\Omega$ 中非空开，与 $O_n$ 稠密故交非空，于是 $U \cap O_n' \ne \emptyset$。
由 Baire，$\bigcap_n (O_n' \cup \Omega^c)$ 在 $X$ 稠密。任取 $\Omega$ 中非空开 $V$，它与该稠密集相交，交点必在 $\Omega$ 里，故它属于每个 $O_n' \cap \Omega = O_n$。于是 $\bigcap_n O_n$ 与 $V$ 相交。$\blacksquare$

> 讲义里只写了「$O_n' := O_n \cup \Omega^c$ 在 $X$ 稠密」，剩下就是这个补集论证。
