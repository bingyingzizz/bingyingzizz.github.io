# 分裂短正合列　`def.split-exact`　·　说明
根 `../`

**证明。** 记 $i := i_{1}$、$p := i_{2}$，则 $i$ 单、$p$ 满且 $\operatorname{im} i = \ker p$。
- **有截面 $\implies$ 分裂**：设 $p s = 1_{M_{2}}$。则 $p(1_{M} - s p) = p - p s p = 0$，故 $1_{M} - sp$ 落在 $\ker p = \operatorname{im} i$ 里，于是存在 $r : M \to M_{1}$ 使
$$i r = 1_{M} - s p.$$
由 $i$ 单：$i(r i) = (1_{M} - sp)\,i = i - s(p i) = i$（用了 $p i = 0$），故 $r i = 1_{M_{1}}$ ✓。与 $p i = 0$ 合起来，$p_{1} := r$、$i_{1} := i$、$p_{2} := p$、$i_{2} := s$ 满足双积的三条等式（$r i = 1$、$p s = 1$、$i r + s p = 1_{M}$，见「直和就是积」），即 $M$ 就是 $M_{1} \oplus M_{2}$，该列分裂 ✓。
- **分裂 $\implies$ 有截面**：分裂时该列同构于 $0 \to M_{1} \xrightarrow{\ \mathrm{pr}_{1}\ } M_{1} \oplus M_{2} \xrightarrow{\ \mathrm{pr}_{2}\ } M_{2} \to 0$，而 $\mathrm{pr}_{2}$ 有显然的截面（到第二个分量的含入），沿同构搬回去就得到 $p$ 的截面 ✓。
- **对偶**：把同一论证搬到 $\mathcal{C}^{\mathrm{op}}$，得「分裂 $\iff$ $i$ 有收缩」✓。∎

> 续见 notes/def.split-exact.3.md
