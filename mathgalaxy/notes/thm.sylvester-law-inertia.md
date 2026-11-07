# 惯性定理　`thm.sylvester-law-inertia`　·　说明
根 `../`

**证明**。设 $q(x) = x^{T}Ax$ 是 $A$ 对应的二次型、$\beta(x, y) = x^{T}Ay$ 是它的对称双线性型。

**存在性（配方法）**。对 $n$ 归纳。$n = 0$ 或 $q \equiv 0$ 时 $A = 0$，取 $P = I$、$p = q = 0$。否则存在 $e$ 使 $q(e) \ne 0$。令 $W := \{v : \beta(e, v) = 0\}$。因 $\beta(e, e) = q(e) \ne 0$，有 $V = \operatorname{span}(e) \oplus W$：任意 $v$ 可写成 $v = \frac{\beta(e, v)}{\beta(e, e)}e + \bigl(v - \frac{\beta(e, v)}{\beta(e, e)}e\bigr)$，第二项落在 $W$ 中。把 $e$ 换成 $e/\sqrt{|q(e)|}$（仍记 $e$），则 $q(e) = \pm 1$；在基 $e$ 与 $W$ 的一组基下，$q$ 是 $\pm x_{1}^{2}$ 与 $q|_{W}$ 的正交直和（交叉项全为零）。对维数 $n-1$ 的 $W$ 用归纳假设，$q|_{W} \cong \operatorname{diag}(1^{p'}, -1^{q'}, 0^{z'})$；拼起来即得对角形 ✓。

> 续见 notes/thm.sylvester-law-inertia.2.md
