# 第一同构定理（Noether）　`thm.first-iso`
第一同构定理（Noether）
layer 9 · 定理 · 代数结构 · 抽象代数+集合论

设 $\varphi : G \to G'$ 是**群同态**。则 $\varphi$ 诱导出同构

$$G \big/ \ker\varphi \;\cong\; \operatorname{im}\varphi, \qquad g \ker\varphi \;\longmapsto\; \varphi(g).$$

特别地：**满同态的像就是商群**（$\varphi$ 满时 $G/\ker\varphi \cong G'$）。

## 为什么成立（入边，证明在 proofs/）
- `def.quotient-group` 商群：用到了定义 商群　proofs/def-dep.firstiso-quotient-group.md
- `def.group-hom` 群同态、核与像：用到了定义 群同态、核与像　proofs/def-dep.firstiso-kernel.md
- `def.normal-subgroup` 正规子群：用到了定义 正规子群　proofs/def-dep.firstiso-normal.md
- `def.quotient-group` 商群：用到了定义 商群　proofs/def-dep.firstiso-quotient.md

- …另有入边，续页见 `nodes/thm.first-iso.2.md`

refs: Lang, Algebra, Ch. I §4；Dummit & Foote, Abstract Algebra, §10.2

> 说明见 `notes/thm.first-iso.md`
