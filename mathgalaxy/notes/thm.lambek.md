# 只需有限生成理想　`thm.lambek`　·　说明
根 `../`

**为什么这是强化**：平坦的定义要对**一切**单射检验；`prop.flat-equivalences` 第 4 条已经把它压到「理想」；Lambek 再压到「**有限生成**理想」—— 后者常常是可数的一批，能逐个算。

**证明（反方向，三步）**：

**第一步（化到有限生成）**：$M$ 是它的有限生成子模的滤过余极限，$(-)\otimes N$ 保滤过余极限，而单射在滤过余极限下封闭，故只需对有限生成的 $M$ 验证。

**第二步（化到自由模的子模）**：取满射 $R^{n} \twoheadrightarrow M$，令 $K$ 是 $M_{1}$ 的原像，得短正合列 $0 \to K \to R^{n} \to M \to 0$。把两个列各自张量后比较，「$K \otimes M \to R^{n} \otimes M$ 单」蕴含「$M_{1} \otimes M \to M \otimes M$ 单」（蛇引理）。于是只需证：对每个**有限生成**子模 $K \subseteq R^{n}$，$K \otimes M \to R^{n} \otimes M$ 单。

> 续见 notes/thm.lambek.2.md
