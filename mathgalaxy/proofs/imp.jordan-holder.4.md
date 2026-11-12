# Zassenhaus（蝴蝶）引理 + Schreier 加细 $\implies$ Jordan–Hölder
`imp.jordan-holder` · 推出 · strong 边 · 根 `../`

`def.composition-series` 合成列 + `thm.first-iso` 第一同构定理（Noether） → `thm.jordan-holder` Jordan–Hölder 定理

由引理 1，这两步的商在「对 $i$ 加细」与「对 $j$ 加细」两种看法下同构 —— 于是把双边所有小区间用蝴蝶引理配成对，得到两条等价加细。∎

**回到定理**：设两条**合成**列为 $\mathcal{C}_1, \mathcal{C}_2$。

由引理 2 存在等价加细 $\mathcal{C}_1^{\prime}, \mathcal{C}_2^{\prime}$。

但合成列已无法再加细：其每步商是单群，而单群没有非平凡正规子群，插不进任何中间项。

> 续见 proofs/imp.jordan-holder.5.md
