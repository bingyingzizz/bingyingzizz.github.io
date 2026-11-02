# T_F ± F 递增　`lem.variation-monotone`　·　说明
根 `../`

证明：设 $x < y$，任给 $\varepsilon > 0$，取分划 $x_0 < \cdots < x_n = x$ 使 $\sum|F(x_j) - F(x_{j-1})| \ge T_F(x) - \varepsilon$，再补上点 $y$ 与 $x$ 之间的比较：



$$T_F(y) \pm  F(y) \ge \sum_j |F(x_j) - F(x_{j-1})| + (F(y) - F(x)) \pm  F(x) \ge T_F(x) - \varepsilon \pm  F(x)$$



由 $\varepsilon$ 任意即得 $T_F(y) \pm  F(y) \ge T_F(x) \pm  F(x)$。∎

⭐ 这条是下一条「BV 的 Jordan 分解」的全部技术内容：一旦知道 $T_F \pm  F$ 递增，就能把 $F$ 写成一增一减。
