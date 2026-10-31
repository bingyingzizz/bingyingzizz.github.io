# 米田引理 $\implies$ 表示的两个定义等价
`imp.yoneda-criterion` · 推出 · strong 边 · 根 `../`

`lem.yoneda` 米田引理 → `thm.represented-criterion` 表示的两个定义等价

**（$\Longleftarrow$）** 设 $h^{X} \cong F$，取一个自然同构 $\alpha : h^{X} \implies F$。由米田引理，$\alpha$ 由元素 $s = \alpha_{X}(1_{X}) \in F(X)$ 决定；反过来，给定 $s$ 也能定义出 $\alpha$。

要证 $(X, s)$ 万有。固定 $Y$，则由 $\alpha$ 是自然同构，$\alpha_{Y} : \operatorname{Hom}_{\mathcal{C}}(X, Y) \to F(Y)$ 是双射。对任意 $t \in F(Y)$，记 $f = \alpha_{Y}^{-1}(t)$，即 $\alpha_{Y}(f) = t$。

再用 $\alpha$ 的自然性（取 $f : X \to Y$）：

$$\alpha_{Y}(f) = F(f)\bigl(\alpha_{X}(1_{X})\bigr) = F(f)(s)$$

于是 $F(f)(s) = t$，且 $f$ 由 $\alpha_{Y}^{-1}$ 唯一确定。这就是万有元素的条件。∎

**（$\Longrightarrow$）** 反过来设 $(X, s)$ 万有。对每个 $Y$ 定义

> 续见 proofs/imp.yoneda-criterion.2.md
