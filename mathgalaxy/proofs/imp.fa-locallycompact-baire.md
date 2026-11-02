# 球套法换成紧邻域链
`imp.fa-locallycompact-baire` · 推出 · strong 边 · 根 `../`

`thm.baire` Baire 纲定理 + `def.hausdorff` Hausdorff 空间 → `thm.locally-compact-baire` 局部紧 Hausdorff 是 Baire

设 $X$ 局部紧 Hausdorff，$O_n$ 稠密开。任给非空开 $U$，因 $O_1$ 稠密有 $U \cap O_1 \ne \emptyset$；取 $x_1 \in U \cap O_1$ 与其**紧**邻域 $V_1 \subseteq U \cap O_1$（局部紧 Hausdorff 有紧邻域基）。
归纳：已有 $V_n$，取 $x_{n+1} \in \operatorname{int}V_n \cap O_{n+1}$ 与紧邻域 $V_{n+1} \subseteq \operatorname{int}V_n \cap O_{n+1}$。
紧集族 $\{V_n\}$ 嵌套且每个非空，由**有限交性质** $\bigcap_n V_n \ne \emptyset$；取 $x \in \bigcap V_n$，则 $x \in U$ 且 $x \in O_n$ 对一切 $n$。

故 $\bigcap O_n$ 与任意非空开 $U$ 相交。

$\blacksquare$

> 与完备度量的证明逐字对应，唯一的替换是「半径 $\to 0$」$	o$「紧集的有限交性质」。这也说明 Baire 纲根本不依赖度量。
