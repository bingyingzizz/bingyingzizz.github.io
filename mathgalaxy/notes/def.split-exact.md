# 分裂短正合列　`def.split-exact`　·　说明
根 `../`

**等价判据**（在阿贝尔范畴里，三条等价）：

- $i_{2}$ 有**截面** $s : M_{2} \to M$（$i_{2} \circ s = \mathrm{id}$）；
- $i_{1}$ 有**收缩** $r : M \to M_{1}$（$r \circ i_{1} = \mathrm{id}$）；
- $M \cong M_{1} \oplus M_{2}$ 与这个列相容。

**证明。** 记 $i := i_{1}$、$p := i_{2}$，则 $i$ 单、$p$ 满且 $\operatorname{im} i = \ker p$。
- **有截面 $\implies$ 分裂**：设 $p s = 1_{M_{2}}$。则 $p(1_{M} - s p) = p - p s p = 0$，故 $1_{M} - sp$ 落在 $\ker p = \operatorname{im} i$ 里，于是存在 $r : M \to M_{1}$ 使
$$i r = 1_{M} - s p.$$
由 $i$ 单：$i(r i) = (1_{M} - sp)\,i = i - s(p i) = i$（用了 $p i = 0$），故 $r i = 1_{M_{1}}$ ✓。

> 续见 notes/def.split-exact.2.md
