# imp.metric-pn
`imp.metric-pn` · 推出 · strong 边 · 根 `../`

`def.metric-space` 距离空间 → `def.perfectly-normal-space` 完美正规空间

设 $(X, d)$ 是距离空间，$F \subseteq X$ 闭。记 $d(x, F) := \inf_{y \in F} d(x, y)$（对空集约定 $+\infty$）。

**① 每个闭集是 $G_{\delta}$**：

$$F = \bigcap_{n \ge 1}\Bigl\{\, x : d(x, F) < \tfrac{1}{n} \,\Bigr\} ,$$

右边每一项是开集（$d(\cdot, F)$ 是连续函数），所以 $F$ 是可数交开集 ✓。（$x \in F \iff d(x,F) = 0$ 用的是 $F$ 闭。）

**② 正规**：给不交闭集 $A, B$，令

$$f(x) := \frac{d(x, A)}{d(x, A) + d(x, B)} ,$$

分母恒不为零（$A \cap B = \emptyset$ 且 $A, B$ 闭 $\implies$ 不可能同时 $d(x,A) = d(x,B) = 0$），$f$ 连续，$f|_{A} \equiv 0$、$f|_{B} \equiv 1$。取 $U = f^{-1}([0, 1/2))$、$V = f^{-1}((1/2, 1])$ 即不交开集 ✓。

于是 $X$ 正规且每个闭集 $G_{\delta}$，即完美正规 ✓。∎

> 续见 proofs/imp.metric-pn.2.md
