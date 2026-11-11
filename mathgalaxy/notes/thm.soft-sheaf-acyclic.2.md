# 软层无环（Godement）　`thm.soft-sheaf-acyclic`　·　说明
根 `../`

证明：取 $h \in \Gamma(X,\mathcal{H})$。由 $\mathcal{H}$ 是商层，存在开覆盖 $\{U_{x}\}_{x \in X}$ 与 $g_{x} \in \Gamma(U_{x},\mathcal{G})$，使 $g_{x} \mapsto h|_{U_{x}}$。仿紧性给出局部有限的闭覆盖 $\{A_{i}\}_{i \in I}$，满足 $A_{i} \subseteq U_{i}$（重标号后）。把 $I$ 良序化，对初始段 $J \subseteq I$ 记 $B_{J} := \bigcup_{i \in J} A_{i}$；局部有限族的任意子族的并是闭集，故 $B_{J}$ 闭。

对 $i \in I$ 归纳构造 $u_{i} \in \Gamma(B_{\le i},\mathcal{G})$，使 $u_{i} \mapsto h|_{B_{\le i}}$ 且 $u_{i}$ 延拓 $u_{<i}$。极限序数取并即可。后继步：在闭集 $B_{<i} \cap A_{i}$ 上，$g_{i} - u_{<i}$ 落在 $\mathcal{F}$ 中（两者都提升 $h$）；$\mathcal{F}$ 软，故它延拓为 $t \in \Gamma(X,\mathcal{F})$。在 $A_{i}$ 上取 $g_{i} - t$，在 $B_{<i}$ 上取 $u_{<i}$：两者在 $B_{<i} \cap A_{i}$ 上相等，而 $A_{i}$、$B_{<i}$ 是两个闭集，层公理把它们粘成 $\Gamma(B_{\le i},\mathcal{G})$ 的元素。

> 续见 notes/thm.soft-sheaf-acyclic.3.md
