# 第一同构定理（Noether）　`thm.first-iso`　·　说明
根 `../`

**证明的三步。** 记 $K = \ker\varphi$。

- **良定义**：若 $g K = g' K$，则 $g' = g k$（某个 $k \in K$），于是 $\varphi(g') = \varphi(g)\varphi(k) = \varphi(g) e' = \varphi(g)$ —— 同一陪集里的元素被送到同一个值。
- **同态**：$\overline{\varphi}\bigl((gK)(g'K)\bigr) = \overline{\varphi}(gg'K) = \varphi(gg') = \varphi(g)\varphi(g') = \overline{\varphi}(gK)\,\overline{\varphi}(g'K)$。
- **双射**：单，因为 $\overline{\varphi}(gK) = e'$ 意味着 $\varphi(g) = e'$，即 $g \in K$，于是 $gK = K$；满，因为像本来就是 $\varphi(G)$。∎

⭐ **它其实是「集合 + 运算 + 公理」这套格式的通用定理，不是群的专利。** 同一个证明逐字照搬，只要把「同态」换成对应的东西：

$$A \big/ \ker f \;\cong\; \operatorname{im} f.$$

> 续见 notes/thm.first-iso.2.md
