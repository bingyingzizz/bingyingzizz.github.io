# 连续点集是稠密 G_δ　`thm.pointwise-limit-continuity`　·　说明
根 `../`

证法（骨架）：令 $F_{n,k} = \{x : \|f_i(x) - f_j(x)\| \le 1/k\ (\forall i, j \ge n)\}$，它是闭集且 $X = \bigcup_n F_{n,k}$；

由 Baire，$O_k := \bigcup_n \operatorname{int} F_{n,k}$ 稠密开。

令 $O := \bigcap_k O_k$（稠密 $G_\delta$），在 $O$ 上用「$x$ 落在一个 $\operatorname{int} F_{n,k}$ 里 $\implies$ 邻域上 $f_n$ 一致接近」得连续性。

⚠️ 逐点极限**不必**连续（$f_n(x) = x^n$ 在 $[0,1]$ 上）；它只是「连续点很多」。

⭐ 同一模板的经典产物：$C[0,1]$ 里「处处不可微」的函数构成稠密 $G_\delta$（Banach 1931）。
