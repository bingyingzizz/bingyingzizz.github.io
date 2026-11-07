# 连续点集是稠密 G_δ　`thm.pointwise-limit-continuity`　·　说明
根 `../`

**证明**：记 $d$ 为 $E$ 的度量。对 $k\in\mathbb{N}$ 与 $n\in\mathbb{N}$，令 $F_{n,k} := \Bigl\{x\in X : d\bigl(f_{i}(x),f_{j}(x)\bigr) \le \frac{1}{k}\ \text{ 对一切 } i,j\ge n\Bigr\}.$ 每个 $F_{n,k}$ 是闭集：它是连续函数 $x\mapsto d(f_{i}(x),f_{j}(x))$ 在闭集 $[0,1/k]$ 下的原像之交。

**覆盖**：对每个固定的 $k$，$X = \bigcup_{n} F_{n,k}$ —— 因为 $f_{n}(x)$ 收敛故是 Cauchy 列，所以每个 $x$ 落进某个 $F_{n,k}$。

**稠密**：令 $O_{k} := \bigcup_{n}\operatorname{int} F_{n,k}$，它是开集。证它稠密：取非空开集 $U\subseteq X$。$U$ 作为 Baire 空间的非空开子集仍是 Baire 空间，而 $U = \bigcup_{n}(U\cap F_{n,k})$ 是可数个在 $U$ 中闭的集的并，故某个 $U\cap F_{n,k}$ 在 $U$ 中有内点：存在非空开 $V\subseteq U$、$V\subseteq F_{n,k}$。$V$ 也是 $X$ 中的开集，故 $V\subseteq\operatorname{int}F_{n,k}$，于是 $U\cap O_{k}\supseteq V\ne\emptyset$。故 $O_{k}$ 稠密。

> 续见 notes/thm.pointwise-limit-continuity.2.md
