# imp.p-group-subgroups
`imp.p-group-subgroups` · 推出 · strong 边 · 根 `../`

`def.p-group` p-群 + `thm.class-equation` 类方程 → `lem.p-group-subgroups` p-群的真子群严格小于其正规化子

对 $|G|=p^{n}$ 归纳。$n=1$ 时 $G$ 没有真子群，结论真空成立。

设 $n>1$，由类方程 $Z(G)\ne\{e\}$；记 $Z=Z(G)$。

**情形 1：$HZ<G$。** 因为 $Z$ 中心，$HZ=ZH$ 是子群，且 $H\le HZ$。分两种子情形。**1a：$HZ>H$。** 由 $Z\ne\{e\}$ 且 $HZ>H$ 知 $HZ$ 是比 $G$ 小的 $p$-群；对 $(HZ,H)$ 用归纳假设，得 $H<N_{HZ}(H)\le N_G(H)$。**1b：$HZ=H$**（即 $Z\subseteq H$）。此时 $H/Z$ 是 $G/Z$ 的真子群，而 $|G/Z|=p^{n-1}<p^{n}=|G|$；对 $(G/Z,H/Z)$ 用归纳假设，得 $H/Z<N_{G/Z}(H/Z)$。又 $N_{G/Z}(H/Z)=N_G(H)/Z$（$Z$ 中心且 $Z\subseteq H$），故 $H<N_G(H)$。

> 续见 proofs/imp.p-group-subgroups.2.md
