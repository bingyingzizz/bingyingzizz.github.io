# K-有界正合沿滤过余极限保持　`prop.k-bounded-exact-filtered-colimit`　·　说明
根 `../`

**证明。** 等距转移映射给出两条关键事实：余极限的**半范数就是代表元的半范数**（所有代表元范数相同，否则沿等距映射传递会矛盾）✓；微分与转移映射交换，因此 $\|d s\| = \|d s_{k}\|$ 对任何代表元 $s_{k} \mapsto s$ 成立 ✓。
给定 $s \in M^{n}$ 与 $\varepsilon > 0$：取代表元 $s_{k} \in M^{n}_{k}$（余极限的元素都是某个有限阶段的元素）✓；在 $M^{\bullet}_{k}$ 里用 $K$-有界正合，得到 $s'_{k} \in M^{n+1}_{k}$ 使
$$\|s_{k} - d^{n+1}s'_{k}\| \le K\,\|d^{n}s_{k}\| + \varepsilon.$$
把 $s'_{k}$ 映进余极限得 $s' \in M^{n+1}$，再由等距性与微分的交换性，左边与右边逐项搬过去：
$$\|s - d^{n+1}s'\| = \|s_{k} - d^{n+1}s'_{k}\| \le K\,\|d^{n}s_{k}\| + \varepsilon = K\,\|d^{n}s\| + \varepsilon ✓$$
这正是 $K$-有界正合在 $M^{n}$ 处的要求 ✓。∎

> 续见 notes/prop.k-bounded-exact-filtered-colimit.2.md
