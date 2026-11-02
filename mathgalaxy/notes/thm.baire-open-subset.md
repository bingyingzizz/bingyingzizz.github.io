# Baire 的开子集是 Baire　`thm.baire-open-subset`　·　说明
根 `../`

证法：设 $O_n$ 在 $\Omega$ 里稠密开，写 $O_n = \Omega \cap O_n'$（$O_n'$ 在 $X$ 中开）。

则 $O_n' \cup \Omega^c$ 在 $X$ 中**稠密开**；

于是 $\bigcap_n(O_n' \cup \Omega^c)$ 在 $X$ 稠密，与 $\Omega$ 相交得 $\bigcap_n O_n$ 在 $\Omega$ 稠密。

⭐ 用处：开映射定理要在开集上做局部论证、UBP 要看开子集，这条保证「局部化之后 Baire 性质不丢」。
