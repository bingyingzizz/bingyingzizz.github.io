# 正交性 $\implies$ $\omega^{i}_{\ j}+\omega^{j}_{\ i} = 0$
`imp.dg-antisym` · 推出 · strong 边 · 根 `../`

`def.connection-form` 联络形式 → `prop.connection-antisymmetric` 联络形式反对称

由 $\langle e_{i}, e_{j}\rangle = \delta_{ij}$ 是常数，取外微分：

$$0 = \mathrm{d}\langle e_{i}, e_{j}\rangle = \langle \mathrm{d}e_{i}, e_{j}\rangle+\langle e_{i}, \mathrm{d}e_{j}\rangle = \omega^{j}_{\ i}+\omega^{i}_{\ j}.$$

中间一步用的是 $\omega^{j}_{\ i} = \langle \mathrm{d}e_{i}, e_{j}\rangle$ 与 $\omega^{i}_{\ j} = \langle \mathrm{d}e_{j}, e_{i}\rangle$，以及内积的对称性。取 $i = j$ 得 $2\omega^{i}_{\ i} = 0$。∎
