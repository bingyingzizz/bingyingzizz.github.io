# Zassenhaus（蝴蝶）引理 + Schreier 加细 $\implies$ Jordan–Hölder
`imp.jordan-holder` · 推出 · strong 边 · 根 `../`

`def.composition-series` 合成列 → `thm.jordan-holder` Jordan–Hölder 定理

**回到定理**：设两条**合成**列为 $\mathcal{C}_1, \mathcal{C}_2$。由引理 2 存在等价加细 $\mathcal{C}_1^{\prime}, \mathcal{C}_2^{\prime}$。但合成列已无法再加细：其每步商是单群，而单群没有非平凡正规子群，插不进任何中间项。故 $\mathcal{C}_1^{\prime} = \mathcal{C}_1$、$\mathcal{C}_2^{\prime} = \mathcal{C}_2$，于是两条合成列本身等价：长度相同、因子多重集相同。∎

> ⚠ 引理 1 的验证（同态性、核、像）是纯机械的逐项检查，这里略去了细节；它的几何形象是「蝴蝶」——四个子群围成的平行四边形两组对边等长。⭐ 结构上这条定理是「**加细 + 最细即唯一**」，与整数分解里「不断除以素因子直到商为 1」是同一个逻辑。
