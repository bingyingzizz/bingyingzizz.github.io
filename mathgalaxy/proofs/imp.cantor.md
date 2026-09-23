# 幂集 $\implies$ Cantor 定理（对角线法）
`imp.cantor` · 推出 · strong 边 · 根 `../`

`def.power-set` 幂集 𝒫(X) → `thm.cantor` Cantor 定理

**① $|A| \le |\mathcal{P}(A)|$。** 映射 $a \mapsto \{a\}$ 是单射：$\{a\} = \{a'\} \implies a = a'$。

**② 不存在满射 $f : A \to \mathcal{P}(A)$。** 反设存在。令

$$D := \{ a \in A : a \notin f(a) \}$$

这是 $A$ 的一个子集，所以 $D \in \mathcal{P}(A)$。由满射性，存在 $a_0 \in A$ 使 $f(a_0) = D$。

**③ 矛盾。** 看 $a_0$ 属不属于 $D$：

- 若 $a_0 \in D$：由 $D$ 的定义 $a_0 \notin f(a_0) = D$，矛盾；
- 若 $a_0 \notin D = f(a_0)$：那么 $a_0$ 满足「$a \notin f(a)$」，按定义又该有 $a_0 \in D$，矛盾。

两边都不成立，故不存在满射。结合 ① 得 $|A| < |\mathcal{P}(A)|$。$\blacksquare$

> $D$ 之所以叫「对角集」：把 $A$ 排成行、把 $\mathcal{P}(A)$ 排成列，「$a \in f(a)$」是一张表，$D$ 取的是这张表的**对角线**再逐格取反。
