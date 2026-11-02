# Baire 的三种说法等价
`imp.fa-baire-characterizations` · 推出 · strong 边 · 根 `../`

`thm.baire` Baire 纲定理 → `prop.baire-characterizations` Baire 的三条等价刻画

设 (1)：可数个稠密开集之交稠密。
(1) $\iff$ (3)：令 $A_n$ 闭且无处稠密，则 $X \setminus A_n$ 稠密开；$\bigcap_n (X \setminus A_n) = X \setminus \bigcup_n A_n$ 稠密 $\iff$ $\bigcup_n A_n$ 不含非空开集。
(2) $\iff$ (3)：非空开集 $U$ 是第一纲 $\iff$ $U \subseteq \bigcup_n A_n$（$A_n$ 闭且无处稠密），即 $\bigcup_n A_n$ 含非空开集。
所以三条是同一条取补集。$\blacksquare$

> ⚠️ (2) 里的「第二纲」作用对象是**非空开集**，不是任意集合。
