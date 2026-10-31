# Weingarten 变换 $+$ $\omega^{3}=0$ $\implies$ $II = -\sum_{i}\omega^{i}\omega^{i}_{\ 3}$
`imp.dg-II` · 推出 · strong 边 · 根 `../`

`def.weingarten-map` Weingarten 变换 + `lem.adapted-frame` 适配标架 → `def.second-fundamental-form` 第二基本形式

用 $\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$、$e_{3} = n$、$\mathrm{d}n = \mathrm{d}e_{3} = \sum_{i}\omega^{i}_{\ 3}e_{i}$：

$$II(v,w) = \langle \mathrm{d}r(v), -\mathrm{d}n(w)\rangle = -\sum_{i}\omega^{i}(v)\,\langle e_{i}, \mathrm{d}e_{3}(w)\rangle = -\sum_{i}\omega^{i}(v)\,\omega^{i}_{\ 3}(w).$$

再代入 $\omega^{i}_{\ 3} = \sum_{j}c_{ij}\omega^{j}$ 与 $h_{ij} = -c_{ij}$，并用 $c_{12} = c_{21}$：

> 续见 proofs/imp.dg-II.2.md
