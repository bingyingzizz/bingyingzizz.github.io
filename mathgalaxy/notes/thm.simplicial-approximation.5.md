# 单纯逼近　`thm.simplicial-approximation`　·　说明
根 `../`

⚠️ **这里缺一步（本图未写）**：$\iota\,g\,\mathrm{sd}^{m} = \iota$ 只给出 $\iota$ 的一个右逆候选，推不出它可逆 —— 除非先知道 $g\,\mathrm{sd}^{m}$ 可逆，而那正是要证的（公式里为排版省略了诱导映射的星号下标）。要闭合，得显式造出链映射 $r : S_{*}(|K|) \to C_{*}(K)$（把足够细的奇异链搬回单纯链）与两侧链同伦 $r\,\iota = \operatorname{id}$、$\iota\,r \simeq \operatorname{id}$；**这两条链同伦就是本图在链级上的空白**。上面引理的星条件与重分证明本身是完整的，缺的只是这副链条齿轮。

**⚠️ 技术细节**：上面用了「单纯映射诱导链映射」「链同伦的棱柱构造」两件标准机器（见 `def.chain-homotopy`、`thm.homotopy-invariance`）。若把 $C_{*}$ 取成**有序**链群，$g$ 在退化时可能把单纯形压扁，链映射的符号要按顶点顺序处理；本图的同调均按有序链群的商（去掉退化）定义，此处不展开符号。

**边界与反例**：

> 续见 notes/thm.simplicial-approximation.6.md
