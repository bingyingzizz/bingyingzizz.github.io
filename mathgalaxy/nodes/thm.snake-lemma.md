# 蛇引理　`thm.snake-lemma`
蛇引理（Snake Lemma）
layer 17 · 引理 · 加法与阿贝尔范畴 · 同调代数

设 $\mathcal{A}$ 是阿贝尔范畴，下面这张交换图的两行都正合：

$$\begin{array}{ccccccc} A & \xrightarrow{\;f\;} & B & \xrightarrow{\;g\;} & C & \longrightarrow & 0 \\[2pt] {\scriptstyle a}\big\downarrow & & {\scriptstyle b}\big\downarrow & & {\scriptstyle c}\big\downarrow & & \\[2pt] 0 & \longrightarrow & A' & \xrightarrow[\;f'\;]{} & B' & \xrightarrow[\;g'\;]{} & C' \end{array}$$
> 陈述续见 `nodes/thm.snake-lemma.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.abelian-category` 加法 / 阿贝尔范畴：用到了定义 加法 / 阿贝尔范畴　proofs/def-dep.snake-abelian.md
- `def.equalizer` 等化子 / 余等化子：用到了定义 等化子 / 余等化子　proofs/def-dep.snake-equalizer.md

## 它能推出什么 / 谁在用它
- 被 `thm.five-lemma` 五引理 用

> 说明见 `notes/thm.snake-lemma.md`
