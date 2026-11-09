# Michael 仿紧判别法　`thm.michael-paracompact`　·　说明
根 `../`

**$(\Longleftarrow)$ 才是内容，$(\implies)$ 是废话**：仿紧的加细按定义就是局部有限的，而开加细当然是加细。所以这条定理的全部难点在一句话 —— **把「不必开」的局部有限加细撑成开加细，同时不毁掉局部有限性**。
**思路（Michael）**：给定开覆盖 $\mathcal{U}$ 与它的局部有限加细 $\{ E_{s} \}$。
- 先做归约：由局部有限可设加细是**点有限**的（局部有限 $\implies$ 点有限）；
- 逐点撑开：对 $x \in E_{s}$，正则性给出开集 $O_{x}$ 使 $x \in O_{x} \subseteq \overline{O_{x}} \subseteq$ 覆盖中含 $E_{s}$ 的那个成员，再令 $V_{s} := \bigcup \{\, O_{x} : x \in E_{s} \,\}$；

> 续见 notes/thm.michael-paracompact.2.md
