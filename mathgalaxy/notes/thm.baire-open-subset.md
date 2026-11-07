# Baire 的开子集是 Baire　`thm.baire-open-subset`　·　说明
根 `../`

证法：设 $O_n$ 在 $\Omega$ 里稠密开，写 $O_n = \Omega \cap O_n'$（$O_n'$ 在 $X$ 中开）。

则 $O_n' \cup (X \setminus \overline{\Omega})$ 在 $X$ 中**稠密开**（并上的是开集 $X \setminus \overline{\Omega}$；$\Omega^{c}$ 本身不必开 —— $\Omega = (0,1)$、$O_n' = (0,1) \setminus \{1/m\}$ 时 $\Omega^{c}$ 会让并集丢掉 $0$ 的邻域）；

于是 $\bigcap_n(O_n' \cup (X \setminus \overline{\Omega}))$ 在 $X$ 稠密，与 $\Omega$ 相交得 $\bigcap_n O_n$ 在 $\Omega$ 稠密。

⭐ 用处：开映射定理要在开集上做局部论证、UBP 要看开子集，这条保证「局部化之后 Baire 性质不丢」。
