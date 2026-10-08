# 两个方向的单射 $\implies$ 双射
`imp.schroder-bernstein` · 推出 · strong 边 · 根 `../`

`def.bijection` 单射 / 满射 / 双射 → `thm.schroder-bernstein` Schröder–Bernstein 定理

设 $f : A \to B$、$g : B \to A$ 都是单射。把 $A$ 分成两半，一半用 $f$、一半用 $g^{-1}$，拼出一个双射。

**① 造一串集合。** 令

$$A_0 := A \setminus g(B), \qquad A_{n+1} := g(f(A_n))$$

（直观：$A_0$ 是「$B$ 管不到」的那部分，剩下的在 $f$ 与 $g$ 之间来回倒。）令

$$A^{*} := \bigcup_{n=0}^{\infty} A_n, \qquad A^{\sharp} := A \setminus A^{*}$$

**② 定义 $h : A \to B$。**

$$h(a) := \begin{cases} f(a), & a \in A^{*} \\ g^{-1}(a), & a \in A^{\sharp} \end{cases}$$

要说明：$a \in A^{\sharp}$ 时 $a \in g(B)$，所以 $g^{-1}(a)$ 有意义。事实上若 $a \notin g(B)$ 则 $a \in A_0 \subseteq A^{*}$，与 $a \in A^{\sharp}$ 矛盾。

**③ $h$ 是单射。** 分三种情况：同在 $A^{*}$ 上由 $f$ 单射；同在 $A^{\sharp}$ 上由 $g$ 单射；一边一个时，$h(A^{*}) = f(A^{*})$ 而

> 续见 proofs/imp.schroder-bernstein.2.md
