# 合成列　`def.composition-series`　·　说明
根 `../`

⚠ 「正规」只要求在**相邻两项之间**（$G_i \trianglelefteq G_{i+1}$）。若要求每个 $G_i$ 都在整个 $G$ 里正规，大多数群根本不会有这种链 —— 这个差别常被读漏。

⭐ 例子（每个都要能自己写出合成因子）：
- $S_3$：$\{e\} \trianglelefteq A_3 \trianglelefteq S_3$，因子 $\mathbb{Z}/3,\ \mathbb{Z}/2$；
- $S_4$：$\{e\} \trianglelefteq \mathbb{Z}/2 \trianglelefteq V_4 \trianglelefteq A_4 \trianglelefteq S_4$（$V_4 = \{e,(12)(34),(13)(24),(14)(23)\}$，它本身不单，还得再插一项），因子 $\mathbb{Z}/2,\ \mathbb{Z}/2,\ \mathbb{Z}/3,\ \mathbb{Z}/2$；
- $\mathbb{Z}/12$：$\{e\} \trianglelefteq \mathbb{Z}/2 \trianglelefteq \mathbb{Z}/6 \trianglelefteq \mathbb{Z}/12$，因子 $\mathbb{Z}/2,\ \mathbb{Z}/3,\ \mathbb{Z}/2$。

⚠ 不是所有链都是合成列：$\{e\} \trianglelefteq \mathbb{Z}/2 \trianglelefteq \mathbb{Z}/12$ 中间那步的商 $\mathbb{Z}/6$ **不单**，所以它只是正规链，不是合成列（但可以加细成上面那条）。

> 续见 notes/def.composition-series.2.md
