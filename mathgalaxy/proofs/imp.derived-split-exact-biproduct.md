# 「直和就是积」给出分裂短正合列的等价判据
`imp.derived-split-exact-biproduct` · 推出 · strong 边 · 根 `../`

`prop.biproduct-is-product` 直和就是积 → `def.split-exact` 分裂短正合列

设 $0 \to M_{1} \xrightarrow{\ i\ } M \xrightarrow{\ p\ } M_{2} \to 0$ 正合（于是 $i$ 单、$p$ 满、$\operatorname{im}i = \ker p$）。

**有截面就分裂。** 设 $p s = 1_{M_{2}}$。则 $p(1_{M}-sp) = p - psp = 0$，故 $1_{M}-sp$ 落在 $\ker p = \operatorname{im}i$ 里，取 $r$ 使 $i r = 1_{M}-sp$。由 $i$ 单：

$$i(ri) = (1_{M}-sp)\,i = i - s(pi) = i \quad\text{（用到 } pi = 0\text{）}\Longrightarrow ri = 1_{M_{1}}.$$

> 续见 proofs/imp.derived-split-exact-biproduct.2.md
