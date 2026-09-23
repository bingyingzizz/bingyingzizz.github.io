# 佐恩引理 $\implies$ 每个向量空间有基
`imp.zorn-to-basis` · 推出 · strong 边 · 根 `../`

`lem.zorn` 佐恩引理 → `thm.vsbasis` 每个向量空间有基

2. **每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{A}$ 是 $\subseteq$链，令 $U = \bigcup \mathcal{D}$。要证 $U$ 线性无关，只需证 $U$ 的每个有限子集线性无关：取有限子集 $\{v_{1}$ …$v_{n}\} \subseteq U$，每个 $v_{i}$ 属于某个 $D_{i} \in \mathcal{D}$；$\mathcal{D}$ 是链且只有有限多个 $D_{i}$，故其中有一个最大的 $D$ 包含全部 $v_{i}$，即 $\{v_{1}$ …$v_{n}\} \subseteq D$。而 $D$ 线性无关，故它的子集 $\{v_{1}$ …$v_{n}\}$ 也线性无关。因此 $U$ 线性无关，$U \in \mathcal{A}$，它是 $\mathcal{D}$ 的上界。

3. 由佐恩引理，$\mathcal{A}$ 有极大元 $B$。$B$ 是含 $S_{0}$ 的线性无关集，且在「含 $S_{0}$ 的线性无关集」中极大。

> 续见 proofs/imp.zorn-to-basis.3.md
