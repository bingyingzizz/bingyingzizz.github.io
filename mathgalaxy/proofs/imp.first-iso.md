# imp.first-iso
`imp.first-iso` · 推出 · strong 边 · 根 `../`

`def.quotient-group` 商群 + `def.normal-subgroup` 正规子群 + `def.group-hom` 群同态、核与像 → `thm.first-iso` 第一同构定理（Noether）

**证明的三步。** 记 $K = \ker\varphi$。



- **良定义**：若 $gK = g'K$，则 $g' = gk$（某个 $k \in K$），于是 $\varphi(g') = \varphi(g)\varphi(k) = \varphi(g)e' = \varphi(g)$ —— 同一陪集里的元素被送到同一个值。
- **同态**：$\overline{\varphi}\bigl((gK)(g'K)\bigr) = \overline{\varphi}(gg'K) = \varphi(gg') = \varphi(g)\varphi(g') = \overline{\varphi}(gK)\,\overline{\varphi}(g'K)$。
- **双射**：单，因为 $\overline{\varphi}(gK) = e'$ 意味着 $\varphi(g) = e'$，即 $g \in K$，于是 $gK = K$；满，因为像本来就是 $\varphi(G)$。∎
