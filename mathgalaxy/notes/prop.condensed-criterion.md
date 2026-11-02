# 凝聚态集的刻画　`prop.condensed-criterion`　·　说明
根 `../`

$\mathbf{CHaus}$ 是预拓扑斯，所以它上面的预标准拓扑恰好由两类覆盖生成：**有限不交并**与**满射**。上面第 1、2 条就是这两类覆盖下的层条件 —— 「有限余积变有限积」与「商变核」。

换一种写法：$X$ 是凝聚态集 $\iff$ 它把有限余积变成有限积、把余等化子变成等化子。这句话后面的所有构造都在用。

**证明。** 只需对预标准拓扑的**生成元**验证层条件 —— 一般覆盖由「有限不交并」与「满射」复合而成，够用的正是两类：
- **有限不交并**：覆盖是 $(S_{i} \hookrightarrow S)_{i \in I}$（$I$ 有限、$\coprod_{i} S_{i} \to S$ 双射）。

层条件要求 $X(S) \to \prod_{i} X(S_{i}) \rightrightarrows \prod_{i,j} X(S_{i} \times_{S} S_{j})$ 正合；

由不交性，$i \ne j$ 时 $S_{i} \times_{S} S_{j} = \emptyset$、$i = j$ 时 $= S_{i}$，而 $X(\emptyset) = \{\ast\}$，于是那对映射一个是恒等、一个是常值 —— 正合化归为 $X(S) \cong \prod_{i} X(S_{i})$，即 (4.1)。

> 续见 notes/prop.condensed-criterion.2.md
