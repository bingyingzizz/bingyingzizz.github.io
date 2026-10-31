# 正交余标架 $+$ $\omega^{3}=0$ $\implies$ $I = (\omega^{1})^{2}+(\omega^{2})^{2}$
`imp.dg-I` · 推出 · strong 边 · 根 `../`

`def.moving-frame` 活动标架 + `lem.adapted-frame` 适配标架 → `def.first-fundamental-form` 第一基本形式

直接把 $\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$ 代进定义，用 $\langle e_{i}, e_{j}\rangle = \delta_{ij}$：

$$I(v,w) = \Bigl\langle \sum_{i}\omega^{i}(v)e_{i},\ \sum_{j}\omega^{j}(w)e_{j}\Bigr\rangle = \sum_{i,j}\omega^{i}(v)\omega^{j}(w)\delta_{ij} = \sum_{i}\omega^{i}(v)\omega^{i}(w),$$

即 $I = \sum_{i}(\omega^{i})^{2}$；沿曲面 $\omega^{3} = 0$，只剩两项。再把 $e_{1}, e_{2}$ 用 $r_{u}, r_{v}$ 展开，就得到 $I = E\,\mathrm{d}u^{2}+2F\,\mathrm{d}u\,\mathrm{d}v+G\,\mathrm{d}v^{2}$ —— 两组分量是同一个张量在不同基下的矩阵。∎
