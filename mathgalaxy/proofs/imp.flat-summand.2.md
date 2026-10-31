# 直和的正合性 $\implies$ 直和项继承平坦
`imp.flat-summand` · 推出 · strong 边 · 根 `../`

`prop.free-flat` 自由模平坦 + `def.split-exact` 分裂短正合列 → `prop.flat-summand` 平坦的直和项

**直和情形**：$(-) \otimes \bigoplus_{i} M_{i} \cong \bigoplus_{i} ((-) \otimes M_{i})$ 正合当且仅当每个分量正合 ✓。∎

**投射模平坦**由这条加上 `prop.free-flat` 立刻得到：投射模是自由模的直和项。

> ⚠️ 只对直和成立。直积没有「逐分量判定」这种便利（张量不保积），所以平坦性对直积并不自动封闭。
