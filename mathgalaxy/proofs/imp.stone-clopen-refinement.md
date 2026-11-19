# imp.stone-clopen-refinement
`imp.stone-clopen-refinement` · 推出 · strong 边 · 根 `../`

`def.stone-space` 全不连通与 Stone 空间 + `def.clopen` 闭开集 → `prop.stone-clopen-refinement` Stone 空间的闭开加细

**证明。** Stone 空间就是**投射有限**空间：$S = \varprojlim_{i \in I} S_{i}$，每个 $S_{i}$ 有限离散、转移映射满 ✓。于是
$$\bigl\{\, \pi_{i}^{-1}(x) \;:\; i \in I,\ x \in S_{i} \,\bigr\}$$
是 $S$ 的一组**闭开**集基，而且对 $i \le j$ 有嵌套（$\pi_{j}$ 的纤维含在 $\pi_{i}$ 的纤维里）✓。
**① 先取有限闭开子覆盖。** 给定开覆盖 $(U_{\alpha})$：对每个 $s \in S$ 取 $i(s)$ 与 $x := \pi_{i(s)}(s)$，使
$$D_{s} := \pi_{i(s)}^{-1}(x) \subseteq U_{\alpha(s)}$$
（取 clopen 基中使该纤维含于 $U_{\alpha(s)}$ 的那一层；Stone 性保证基由有限离散像的纤维组成）✓。$\{D_{s}\}$ 是开覆盖，而 $S$ **紧** $\implies$ 抽出有限子覆盖 $D_{1}, \ldots, D_{m}$ ✓。
**② 再两两不交化。** 记 $D^{1}_{j} := D_{j}$、$D^{0}_{j} := S \setminus D_{j}$，

> 续见 proofs/imp.stone-clopen-refinement.2.md
