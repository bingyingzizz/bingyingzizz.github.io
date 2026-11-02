# 佐恩引理 $\implies$ 每个向量空间有基
`imp.zorn-to-basis` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `thm.vsbasis` 每个向量空间有基

设 $V \ne 0$ 是域 $K$ 上的向量空间，并给定线性无关集 $S_{0} \subseteq V$。令

$$\mathcal{A} = \{ S \subseteq V : S \supseteq S_0\text{ 且} S\text{ 线性无关} \}$$

按包含关系 $\subseteq$ 排序。

1. **$\mathcal{A} \ne \emptyset$**：$S_{0} \in \mathcal{A}$。
2. **每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{A}$ 是 $\subseteq$链，令 $U = \bigcup \mathcal{D}$。

要证 $U$ 线性无关，只需证 $U$ 的每个有限子集线性无关：取有限子集 $\{v_{1}$ …$v_{n}\} \subseteq U$，每个 $v_{i}$ 属于某个 $D_{i} \in \mathcal{D}$；

$\mathcal{D}$ 是链且只有有限多个 $D_{i}$，故其中有一个最大的 $D$ 包含全部 $v_{i}$，即 $\{v_{1}$ …$v_{n}\} \subseteq D$。

> 续见 proofs/imp.zorn-to-basis.2.md
