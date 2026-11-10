# Urysohn 引理造可数族分离函数 $\implies$ Urysohn 度量化定理
`dep.pcp-urysohn-lemma-metrization` · 推出 · strong 边 · 根 `../`

`lem.urysohn` Урысон 引理 → `thm.urysohn-metrization` Урысон 度量化定理

节点注里那条嵌入证明的第 3 步：取可数基 $\{B_n\}$，对每一对满足 $\overline{B_m}\subseteq B_n$ 的 $(m,n)$，用 **Urysohn 引理**取连续函数 $f_{m,n}: X \to [0,1]$，使 $f_{m,n}|_{\overline{B_m}} \equiv 0$、$f_{m,n}|_{X\setminus B_n} \equiv 1$。这样的函数只有可数多个，编号成 $f_k$ 后令 $F(x) := (f_k(x)/k)_{k\ge 1}: X \to [0,1]^{\mathbb N}$，再验证 $F$ 是同胚嵌入。引理的前提「$X$ 正规」由第 2 步「正则 $+$ Lindelöf（第二可数）$\implies$ 正规」给出。

> AUD-061 A 类。原记 definition；改 imp：分离函数族是整条证明的引擎。⚠ 本图 `thm.urysohn-metrization` 另有一条经 Nagata–Smirnov 的证明边（源是 `thm.nagata-smirnov`），本条对应注里那条嵌入证明，两条是**不同证明**，不是重复。
