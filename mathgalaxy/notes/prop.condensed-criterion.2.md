# 凝聚态集的刻画　`prop.condensed-criterion`　·　说明
根 `../`

**证明。** 只需对预标准拓扑的**生成元**验证层条件 —— 一般覆盖由「有限不交并」与「满射」复合而成，够用的正是两类：
- **有限不交并**：覆盖是 $(S_{i} \hookrightarrow S)_{i \in I}$（$I$ 有限、$\coprod_{i} S_{i} \to S$ 双射）。层条件要求 $X(S) \to \prod_{i} X(S_{i}) \rightrightarrows \prod_{i,j} X(S_{i} \times_{S} S_{j})$ 正合；由不交性，$i \ne j$ 时 $S_{i} \times_{S} S_{j} = \emptyset$、$i = j$ 时 $= S_{i}$，而 $X(\emptyset) = \{\ast\}$，于是那对映射一个是恒等、一个是常值 —— 正合化归为 $X(S) \cong \prod_{i} X(S_{i})$，即 (4.1)。特别地取 $I = \emptyset$ 得 $X(\emptyset) = \{\ast\}$。
- **满射**：覆盖是单个满射 $S' \twoheadrightarrow S$。层条件就是 $X(S) \to X(S') \rightrightarrows X(S' \times_{S} S')$ 左正合，即 (4.2)。
反过来，两条条件合起来显然蕴含「对所有覆盖是层」（覆盖可以分解成这两类的复合），于是判据成立。∎
