# 张量保正合 $\implies$ 整环上平坦即无挠
`imp.flat-torsionfree` · 推出 · strong 边 · 根 `../`

`prop.flat-equivalences` 平坦的等价说法 + `def.flat-module` 平坦模 → `prop.flat-domain-torsionfree` 平坦模无挠

取 $0 \ne r \in R$。$R$ 是整环，$r$ 不是零因子，故 $R \xrightarrow{\;\cdot r\;} R$ 的核为零，即
$$0 \longrightarrow R \xrightarrow{\;\cdot r\;} R$$
正合。$M$ 平坦，把这一列张量掉，得
$$0 \longrightarrow M \xrightarrow{\;\cdot r\;} M$$
正合 —— 即乘 $r$ 在 $M$ 上单射，这正是无挠 ✓。

**主理想整环上的反向**：无挠模的每个有限生成子模是自由模（PID 上有限生成无挠即自由）；$M$ 是这些子模的滤过余极限；自由模平坦，而平坦模的滤过余极限平坦（$(-)\otimes$ 保滤过余极限，单射性在滤过余极限下封闭），故 $M$ 平坦 ✓。∎

> 反例（一般整环上）：$R = k[x, y]$ 的理想 $I = (x, y)$ 无挠但不平坦 —— $x \otimes y - y \otimes x \ne 0$ 而它的像是 $xy - yx = 0$。
