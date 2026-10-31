# Stone 空间的闭开加细　`prop.stone-clopen-refinement`　·　说明
根 `../`

**证明。** Stone 空间就是**投射有限**空间：$S = \varprojlim_{i \in I} S_{i}$，每个 $S_{i}$ 有限离散、转移映射满 ✓。于是
$$\bigl\{\, \pi_{i}^{-1}(x) \;:\; i \in I,\ x \in S_{i} \,\bigr\}$$
是 $S$ 的一组**闭开**集基，而且对 $i \le j$ 有嵌套（$\pi_{j}$ 的纤维含在 $\pi_{i}$ 的纤维里）✓。
**① 先取有限闭开子覆盖。** 给定开覆盖 $(U_{\alpha})$：对每个 $s \in S$ 取 $i(s)$ 与 $x := \pi_{i(s)}(s)$，使
$$D_{s} := \pi_{i(s)}^{-1}(x) \subseteq U_{\alpha(s)}$$
（用基的闭开性，取直径足够细的那一层）✓。$\{D_{s}\}$ 是开覆盖，而 $S$ **紧** $\implies$ 抽出有限子覆盖 $D_{1}, \ldots, D_{m}$ ✓。
**② 再两两不交化。** 记 $D^{1}_{j} := D_{j}$、$D^{0}_{j} := S \setminus D_{j}$，对每个 $\varepsilon \in \{0,1\}^{m}$ 取
$$C_{\varepsilon} := D^{\varepsilon_{1}}_{1} \cap \cdots \cap D^{\varepsilon_{m}}_{m}.$$
每个 $C_{\varepsilon}$ 是闭开的（有限交、补）✓；不同 $\varepsilon$ 的 $C_{\varepsilon}$ **两两不交** ✓；它们**并为** $S$（每点属

> 续见 notes/prop.stone-clopen-refinement.2.md
