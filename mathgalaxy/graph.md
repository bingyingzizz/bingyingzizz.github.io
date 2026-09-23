# 数学星图 · 全量导出

> 由 `tools/build.mjs` 自动生成于 2026-09-23T11:17:01.097Z
> 6 星系 / 23 星团 / 230 节点 / 485 连线（强边 477，弱边 8）

> ⛔ **这是全量 bulk 导出（约 390 KB），不要单次抓取** —— 抓取工具单次只能返回
> 约 1000 词元（中文约 3 KB），你会只看到开头一小段，而且同一地址反复抓也只
> 会拿到同样的开头。**要检索请走 `llms.txt` 里的检索协议**：
> `index.md` → `index/<星团id>.md` → `nodes/<节点id>.md`。
> 这份文件只在「一次性下载 / 离线打包 / 本地处理」时才用。

两个检索模式（见文末「强弱边」）：
- **常规模式**：只走 `implication` / `equivalence` / `definition` —— 做题、查证明用
- **探索模式**：再加上 `analogy` —— 卡住了想找远房关系时用

---

## 星系：数理逻辑（Mathematical Logic）
> 一阶语言、公式与满足关系；形式系统、可计算性与模型论待补。

### 星团：一阶语言与公式
> 造出「公理写在哪门语言里」这件事本身：符号表 → 项与公式 → 代入 → 满足关系。ZFC 的两条公理模式用的就是它。（形式系统、可计算性、模型论待补。）

#### 一阶语言　`def.first-order-language`
*定义*　一阶语言 $\mathcal{L}$（First-Order Language）

**一阶语言** $\mathcal{L}$ 由一张**符号表**给定，符号分两类：

- **逻辑符号**（所有一阶语言共用）：可数多个**变元** $v_{0}, v_{1}, v_{2}, \ldots$；连接词 $\neg$；量词 $\forall$；等号 $=$；括号。
- **非逻辑符号**（每个语言自己的）：**常元符号**、**$n$ 元函数符号**、**$n$ 元关系符号**，每一种都带一个确定的元数 $n$。

由符号表，用三条**语法规则**生成全部的**项**与**公式**：

1. 变元、常元符号是**项**；若 $f$ 是 $n$ 元函数符号而 $t_{1}, \ldots, t_{n}$ 是项，则 $f(t_{1}, \ldots, t_{n})$ 是项；
2. 若 $R$ 是 $n$ 元关系符号而 $t_{1}, \ldots, t_{n}$ 是项，则 $R(t_{1}, \ldots, t_{n})$ 是**原子公式**；
3. **公式**由原子公式出发，经 $\neg$、$\wedge$、$\vee$、$\to$、$\forall v_{i}$、$\exists v_{i}$ 反复组合而成。

例：$\mathcal{L} = \{ \in \}$（$\in$ 是一个二元关系符号）就是**集合论的语言** —— ZFC 的全部公理都写在这门语言里。

⭐⭐ **这是星图里唯一的「原始层」对象。** 别的东西都是「由更下面的东西造出来」的，一阶语言不是 —— 它是**写公理用的那门语言**，比 ZFC 本身更原始。所以它跟 ZF 公理同在最底下的几层，**不往上连依赖边**：真要连，「公式」就得先在 ZFC 内部由集合造出来，而那要用 ZFC 的公理，可公理模式本身又需要公式 —— 直接成环。

⭐ **在 ZFC 内部也能把它形式化**：把符号编码成集合、把公式编码成有限序列，「$\varphi$ 是公式」于是成为 ZFC 里的一条性质。那是元数学的进一步工作，本图不展开。（这个方向正是 Gödel 不完备定理的入口。）

⚠ **语言与结构要分开**：$\mathcal{L} = \{ \in \}$ 只规定了有哪些符号，还没说变元往哪里跑 —— 那是**满足关系**要说的事。

参考：Kunen, Set Theory, I.2；Enderton, A Mathematical Introduction to Logic, Ch. 1

#### 公式　`def.formula`
*定义*　项与公式 / 语句（Formula, Sentence）

（在给定的**一阶语言** $\mathcal{L}$ 里）**公式**就是按语法规则 3 生成的表达式，即

$$\varphi ::= R(t_{1}, \ldots, t_{n}) \;\mid\; \neg \varphi \;\mid\; (\varphi \wedge \psi) \;\mid\; (\varphi \vee \psi) \;\mid\; (\varphi \to \psi) \;\mid\; \forall v_{i} \varphi \;\mid\; \exists v_{i} \varphi$$

其中 $R$ 遍历 $\mathcal{L}$ 的关系符号，$t_{j}$ 遍历项（严格说这是一条**归纳定义**：公式全体是「含全部原子公式、并对上述运算封闭」的**最小**集合）。

变元在 $\forall v_{i}$、$\exists v_{i}$ 的辖域内出现叫**约束出现**，否则叫**自由出现**；没有自由变元的公式叫**语句**（闭公式）。

公式的**复杂度**（连接词与量词的个数）可以做归纳 —— 这是「对公式作归纳」的依据。

⭐ **「$\varphi (x, p)$」这种写法在说什么**：它表示 $\varphi$ 是一个公式，且其中的自由变元都在 $\{ x, p \}$ 里（未必都用上）。分离公理模式里写的「对每个公式 $\varphi$（$B$ 不出现）」说的就是这种约定 —— **公式是元数学概念，不是 ZFC 的对象**，所以「不出现」才是一句关于符号串的话。

⭐ **归纳定义 = 最小集合**：这句话背后用的是 $\mathbb{N}$ 上的归纳（见「归纳原理与递推定义」）。同时它也是「公式的复杂度可以做归纳」的原因 —— 两者是同一件事的两面。

⚠ **只留一部分原始符号**：$\exists$ 是 $\neg \forall \neg$ 的缩写，$\vee$、$\to$ 也可由 $\neg, \wedge$ 定义。原始符号越少，语法规则和后续的证明就越短，代价是写公式时多几层括号。

⚠ 「变元换成项」的操作是**代入**，它有个必须小心的坑（变元捕获），单独一个节点。

参考：Enderton, A Mathematical Introduction to Logic, Ch. 1；Kunen, Set Theory, I.2

#### 代入　`def.substitution`
*定义*　代入 $\varphi (x/t)$（Substitution）

设 $x$ 是变元，$t$ 是项，$\varphi$ 是公式。把 $\varphi$ 中 $x$ 的**自由出现**全部换成 $t$，得到的公式记作

$$\varphi (x/t)$$

称为 $t$ 对 $x$ 的**代入**（约束出现不动 —— 它们被量词管着）。

⚠ 代入要求 $t$ 对 $\varphi$ 中的 $x$ 是**可代入的**：$t$ 里出现的变元不会在代入后被 $\varphi$ 里的量词「抓走」。这叫**变元捕获**。

⚠ **捕获是什么样**：取 $\varphi = \exists y\, (y > x)$、$t = y$。直接代入得 $\exists y\, (y > y)$ —— 语义完全变了（原来「存在比 $x$ 大的数」，现在成了假命题）。这时要说「$t$ 对 $\varphi$ 中的 $x$ 不可代入」。

⭐ **代入在图上不是花边**：**替换公理模式**的整个内容就是「用一个公式 $\varphi (x, y, p)$ 把 $A$ 中每个 $x$ 的像收集起来」，那里做的正是代入。

⚠ 避免捕获的标准做法是先把冲突的约束变元**改名**（$\alpha$-换名），再代入。这是逻辑教科书写起来最啰嗦、却绕不过去的一步。

参考：Enderton, A Mathematical Introduction to Logic, §2.4

#### 满足关系　`def.satisfaction`
*定义*　结构与满足关系 $\models$（Tarski）

设 $\mathcal{L}$ 是**一阶语言**。$\mathcal{L}$ 的一个**结构** $\mathfrak{A}$ 指：一个非空集合 $A$（**论域**），连同每个常元符号、$n$ 元函数符号、$n$ 元关系符号在 $A$ 上的**解释**。再给定一个**赋值** $s$（给每个变元指定 $A$ 中一个元素）。

**满足关系** $\mathfrak{A} \models \varphi [s]$（「$\varphi$ 在 $\mathfrak{A}$ 中关于赋值 $s$ 成立」）按公式的复杂度**递归定义**：

- **原子公式**：按符号的解释直接算，例如 $\mathfrak{A} \models R(t_{1}, \ldots, t_{n})[s]$ 当且仅当 $(t_{1}^{\mathfrak{A}}[s], \ldots, t_{n}^{\mathfrak{A}}[s]) \in R^{\mathfrak{A}}$；
- $\mathfrak{A} \models \neg \varphi [s]$，当且仅当 $\mathfrak{A} \models \varphi [s]$ **不**成立；
- $\mathfrak{A} \models (\varphi \wedge \psi)[s]$，当且仅当两者都成立；
- $\mathfrak{A} \models \forall v_{i} \varphi [s]$，当且仅当对**每个** $a \in A$ 都有 $\mathfrak{A} \models \varphi [s(v_{i} \mapsto a)]$。

当 $\varphi$ 是**语句**（无自由变元）时，$\mathfrak{A} \models \varphi$ 与赋值 $s$ 无关，直接说 $\varphi$ 在 $\mathfrak{A}$ 中**成立**，记 $\mathfrak{A} \models \varphi$。

⭐ **这个递归定义有根据**：它是按公式的**复杂度**递归的，而复杂度能递归的依据是公式由语法规则**归纳生成**（见「公式」）。语义建立在语法之上 —— 这是这门课的第一条纪律。

⭐ $\models$ 是「$\varphi$ 在 $\mathfrak{A}$ 里为真」的严格含义。整个模型论从这里开始：紧性、完备性、Löwenheim–Skolem 说的都是 $\models$ 与**可证明性** $\vdash$ 的关系。

⚠ **$\models$ 与 $\vdash$ 是两回事**：前者是**语义**（在结构里为真），后者是**语法**（由公理按规则形式推出）。一阶逻辑的完备性定理说的正是两者在一阶情形下重合 —— 那也是「$\mathrm{ZFC} \vdash \varphi$ 与 $\mathrm{ZFC} \models \varphi$ 可以混着用」的依据。

参考：Enderton, A Mathematical Introduction to Logic, §2.2；Marker, Model Theory: An Introduction, §1.1

## 星系：集合论（Set Theory）
> ZFC 公理系统、序数、基数与选择原理。

### 星团：ZFC 公理系统
> 造出「集合」这套语言本身：九条公理定下什么叫集合、怎么造集合。

#### 外延公理　`ax.ext`
*公理*　外延公理（Axiom of Extensionality）

集合由它的元素唯一决定：

$$\forall A \forall B [ \forall x ( x \in A \leftrightarrow  x \in B ) \to A = B ]$$

反方向（$A = B \to$ 元素完全相同）由等词逻辑自动成立，所以常写成 $\leftrightarrow$。
这条公理保证了「用条件刻画集合」时结果是唯一的，因此 $\{ x \in A : \varphi (x) \}$ 这种写法不会产生歧义。

它是「集合」这个名字的全部含义：一个集合 $=$ 一个外延（一堆元素），与「怎么描述它」无关。

去掉它，就可以有元素完全相同却彼此不同的对象（例如带原子 ur-element 的集合论）。

参考：Kunen, Set Theory, I.2；Jech, Set Theory, 1.2

#### 分离公理模式　`ax.sep`
*公理*　分离公理模式（Axiom Schema of Separation）

对每个公式 $\varphi (x, p)$（其中 $B$ 不出现），下面是一条公理：

$$\forall p \forall A \exists B \forall x [ x \in B \leftrightarrow  ( x \in A \wedge  \varphi(x, p) ) ]$$

由外延公理，这样的 $B$ 唯一，记作 $B = \{ x \in A : \varphi (x, p) \}$。俗称「子集公理」。

它是**公理模式**而不是单条公理：每取一个公式 $\varphi$ 就得到一条公理，ZFC 因此有无穷多条公理。

限制 `$x \in A$` 是关键——不能写成 $\{ x : x \notin x \}$，否则就是罗素悖论。

参考：Kunen, Set Theory, I.4

#### 配对公理　`ax.pair`
*公理*　配对公理（Axiom of Pairing）

任给两个集合，可以打包成「只含这两个元素的集合」：

$$\forall a \forall b \exists A \forall x [ x \in A \leftrightarrow  ( x = a \vee  x = b ) ]$$

由外延公理 $A$ 唯一，记作 { a, b }（无序对）。取 $a = b$ 即得单点集 { a }。

有了配对公理，「{a, b}」才是集合；它也是构造有序对 $(a,b) = \{\{a\},\{a,b\}\}$ 的第一步。

参考：Kunen, Set Theory, I.3

#### 并集公理　`ax.union`
*公理*　并集公理（Axiom of Union）

一个集合族的所有成员的元素，仍然构成一个集合：

$$\forall F \exists A \forall x [ x \in A \leftrightarrow  \exists Y ( Y \in F \wedge  x \in Y ) ]$$

记作 $\bigcup F$。配合配对公理可得二元并 $a \cup b = \bigcup \{ a, b \}$。

注意 $\bigcup F$ 是「$F$ 中元素的元素」，不是 $F$ 自身；$\bigcup \{a,b\} = a \cup b$ 正是我们要的二元并。

参考：Kunen, Set Theory, I.3

#### 幂集公理　`ax.power`
*公理*　幂集公理（Axiom of Power Set）

一个集合的所有子集构成一个集合：

$$\forall A \exists P \forall x [ x \in P \leftrightarrow  x \subseteq A ]$$

记作 $\mathcal{P}(A)$（或 P(A)）。它把「$A$ 的所有子集」这件事本身变成一个集合 —— 幂集是「造更大的集合」的基本手段。

它是笛卡尔积 $A \times B$ 存在性的关键：{{a},{a,b}} 落在 $\mathcal{P}(\mathcal{P}(A \cup B))$ 里。

参考：Kunen, Set Theory, I.3

#### 无穷公理　`ax.inf`
*公理*　无穷公理（Axiom of Infinity）

存在一个「归纳集」——含有 $\emptyset$ 且对后继封闭的集合：

$$\exists I [ \emptyset \in I \wedge  \forall x ( x \in I \to x \cup \{ x \} \in I ) ]$$

公理本身只要求 $I$ **非空**且对后继封闭；写成 $\emptyset \in I$ 只是为了好看，$\emptyset$ 是原始对象（见「空集」）。
这条公理宣告了无穷集合的存在，是从中构造自然数集 $\omega$ 的唯一来源。

没有它，$V_\omega$ 就是一个模型，所有集合都有限，算术只能在有界范围内进行。

记号方面：$x \cup \{x\}$ 由配对公理与并集公理写出来，它们与这条公理、以及 $\emptyset$，都在同一层地基上 —— 地基内部的相互引用不画成依赖边。

参考：Kunen, Set Theory, I.5

#### 替换公理模式　`ax.repl`
*公理*　替换公理模式（Axiom Schema of Replacement）

若一个公式定义了「函数关系」，则任一集合的像仍是集合。对每个公式 $\varphi (x, y, p)$（其中 $B$ 不出现）：

$$\forall p [ \forall x\forall y\forall z ( \varphi(x,y,p) \wedge  \varphi(x,z,p) \to y = z ) \to \forall A \exists B \forall y ( y \in B \leftrightarrow  \exists x \in A, \varphi(x,y,p) ) ]$$

它保证了「替换」不会跑出集合论宇宙：像 $B$ 也是集合。

替换公理模式是 $Z$ 与 ZF 的分水岭。由它（加上任取一个集合 $A$）可以推出分离公理模式。

参考：Kunen, Set Theory, I.6

#### 正则公理　`ax.found`
*公理*　正则公理 / 基础公理（Axiom of Foundation）

每个非空集合都有「$\in$极小元」：

$$\forall A [ A \ne \emptyset \to \exists x ( x \in A \wedge  x \cap A = \emptyset ) ]$$

等价说法：$\in$ 是良基关系，不存在无穷递减链

$$x_0 \ni  x_1 \ni  x_2 \ni  \cdots$$

它排除了 $A \in A$ 这类循环集合，也排除了「集合的无穷下降」。

正则公理等价于「集合论宇宙 $V$ 是累积层级 $\bigcup_{\alpha} V_\alpha$」，这条公理让 $\in$归纳法成为合法的证明方法。

参考：Kunen, Set Theory, I.9

#### 无自属集合　`thm.noself`
*定理*　任何集合都不属于自身

$$\forall A ( A \notin A )$$

更一般地，正则公理排除了任何有限的 $\in$循环：

$$A_0 \ni  A_1 \ni  \cdots \ni  A_n = A_0$$

这条定理说明罗素悖论里的「集合 $R = \{ x : x \notin x \}$」不可能存在——否则 $R \in R$ 与 $R \notin R$ 同时成立。

参考：Kunen, Set Theory, I.9

### 星团：集合的构造
> 造出日常要用的零件：空集、子集、并交差补、幂集、有序对、笛卡尔积。

#### 子集　`def.subset`
*定义*　子集 / 真子集（Subset）

设 $A$、$B$ 是集合。

- **$A$ 是 $B$ 的子集**（记 $A \subseteq B$）：$\forall x ( x \in A \to x \in B )$
- **$A$ 是 $B$ 的真子集**（记 $A \subset B$）：$A \subseteq B$ 且 $A \ne B$。

基本性质：$\subseteq$ 自反、传递；并且由外延公理，

$$A = B \iff A \subseteq B \wedge  B \subseteq A$$

这是证明两个集合相等最常用的套路：**两边互包**。

$\emptyset \subseteq A$ 对一切 $A$ 成立（空泛真）。

参考：Kunen, Set Theory, I.2

#### 有序对　`def.pair`
*定义*　有序对（Ordered Pair, Kuratowski）

Kuratowski 定义：

$$(a, b) := \{ \{a\}, \{a, b\} \}$$

它由配对公理与幂集公理保证是集合。

**特征性质**（这才是「有序」的全部含义）：

$$(a, b) = (c, d) \iff a = c \wedge  b = d$$

$n$ 元组递归定义为 $(a_{1}$ …$a_{n}) = ( (a_{1}$ …$a_{n-1}), a_{n} )$。

用集合「编码」有序对之后，关系、函数、序型等等才都能在 ZFC 内部说清楚。

参考：Kunen, Set Theory, I.5

#### 空集存在　`thm.empty`
*定理*　空集存在且唯一

存在一个不含任何元素的集合：

$$\exists B \forall x ( x \notin B )$$

由外延公理，这样的 $B$ 唯一，记作 $\emptyset$。

$\emptyset$ 是 $\in$ 关系的最小元，也是 $\subseteq$ 关系的最小元：$\emptyset \subseteq A$ 对一切 $A$ 成立。

⭐ 这条定理的意义：**不把 $\emptyset$ 当原始对象**，只用分离公理模式（对任一集合 $A$ 取 $\{x \in A : x \ne x\}$）也能把它造出来 —— 所以「空集」在 ZF 里不是一条额外的假设。

参考：Kunen, Set Theory, I.4

#### 二元并存在　`thm.binunion`
*定理*　二元并 $a \cup b$ 存在

任给两个集合，它们的并仍是集合：

$$\forall a \forall b \exists A \forall x [ x \in A \leftrightarrow  ( x \in a \vee  x \in b ) ]$$

记作 $a \cup b$。

$a \cup b$ 是包含 $a$ 与 $b$ 的最小集合（$\subseteq$意义下）。

参考：Kunen, Set Theory, I.3

#### 笛卡尔积存在　`thm.product`
*定理*　笛卡尔积 $A \times B$ 存在

任给两个集合，全体有序对构成一个集合：

$$\forall A \forall B \exists C \forall z [ z \in C \leftrightarrow  \exists a \in A, \exists b \in B, z = (a, b) ]$$

记作 $A \times B = \{ (a, b) : a \in A, b \in B \}$。

它是「关系」「函数」得以定义为集合的前提：没有 $A \times B$，就没有 $R \subseteq A \times B$ 这个说法。

参考：Kunen, Set Theory, I.5

#### 并集与交集　`def.union-inter`
*定义*　并集 / 交集（Union & Intersection）

设 $\mathcal{A}$ 是一族集合（$A$ 的**并**与**交**是它只有两个成员时的特例）：

$$\bigcup \mathcal{A} := \{ x : \exists A \in \mathcal{A},\ x \in A \}$$
$$\bigcap \mathcal{A} := \{ x : \forall A \in \mathcal{A},\ x \in A \}$$

两个集合的情形记作 $A \cup B$、$A \cap B$；可数族的并、交常记作 $\bigcup_{n} A_n$、$\bigcap_{n} A_n$。

显然 $A \cap B \subseteq A \subseteq A \cup B$。

由并集公理，$\bigcup \mathcal{A}$ 是集合；$\bigcap \mathcal{A}$ 由分离公理模式取出。

⭐ **「对可数并封闭」「对可数交封闭」是整段测度论反复出现的条件**（$\sigma$-环、$\sigma$-代数、单调类都是这么定义的）。

⚠ 分配律对任意族都成立：$A \cap \bigcup_i B_i = \bigcup_i (A \cap B_i)$；补与并、交的交换就是 De Morgan 律。

参考：Kunen, Set Theory, I.5

#### 差集与补集　`def.diff-complement`
*定义*　差集 / 补集 / 对称差（Difference, Complement & Symmetric Difference）

设 $A$、$B$、$X$ 是集合且 $A, B \subseteq X$：

- **差集**：$A \setminus B := \{ x \in A : x \notin B \}$；
- **补集**（相对于 $X$）：$A^{c} := X \setminus A$；
- **对称差**：$A \triangle B := (A \setminus B) \cup (B \setminus A)$。

基本恒等式：

$$A \setminus B = A \cap B^{c}, \qquad (A^{c})^{c} = A, \qquad (\bigcup_i A_i)^{c} = \bigcap_i A_i^{c}$$

最后一条就是 **De Morgan 律**。

⭐ De Morgan 律是「用差 + 可数并推出可数交」的全部依据：$\bigcap_n A_n = A_1 \setminus \bigcup_{n \ge 2} (A_1 \setminus A_n)$ —— $\sigma$-环只要求对差与可数并封闭，可数交就自动有了。

⚠ **补集必须相对于某个全集 $X$ 才有意义**，这也正是 $\sigma$-代数要含 $X$ 的原因：不含 $X$ 就只剩 $\sigma$-环，补运算落不到里面。

参考：Kunen, Set Theory, I.5

#### 空集 ∅　`def.empty`
*定义*　空集（Empty Set）

**空集**是不含任何元素的集合，记作 $\emptyset$：

$$\emptyset := \{ x : x \ne x \}$$

「$x \ne x$」对任何 $x$ 都不成立，所以这个集合里一个元素也没有。它是**语言里就给出的原始对象**，与外延公理、一阶语言同级。

于是对一切集合 $A$：$\emptyset \subseteq A$（空泛真），且 $\emptyset$ 是 $\subseteq$ 的最小元。

⭐「$\emptyset \in \mathcal{A}$」「$\emptyset \notin F$」这类条件在测度论里到处都是（选择公理要求集合族里没有空集；$\mu(\emptyset) = 0$ 是测度的第一条）。

⚠ 外延公理给的是「**至多**一个」；真正「存在」的那一半是分开来的，见「空集存在」。

⚠ 区分 $\emptyset$ 与 $\{\emptyset\}$：后者含一个元素（那个元素是空集），所以 $\{\emptyset\} \ne \emptyset$。
⚠ $\emptyset \subseteq A$ 是**空泛真**（vacuously true）：没有任何 $x \in \emptyset$ 需要检查。

参考：Kunen, Set Theory, I.5

#### 幂集 𝒫(X)　`def.power-set`
*定义*　幂集（Power Set）

设 $X$ 是集合。$X$ 的**幂集**是「$X$ 的全部子集」装成的集合：

$$\mathcal{P}(X) := \{ A : A \subseteq X \}$$

于是 $A \in \mathcal{P}(X) \iff A \subseteq X$，且 $\mathcal{P}(X)$ 自己的元素都是集合。

由**幂集公理**，$\mathcal{P}(X)$ 确实是集合；由外延公理它唯一。

有限情形的元素个数：$|X| = n \implies |\mathcal{P}(X)| = 2^{n}$（每个元素「取或不取」）。

⭐ 幂集是「把性质变成对象」的那一步：想谈「$X$ 的所有子集」这件事本身（而不是逐个谈），就得有幂集。$\mathcal{P}(X)$ 同时是几个重要构造的舞台：
- 外测度定义在**全体子集**上：$\mu^* : \mathcal{P}(X) \to [0, +\infty]$；
- 环、$\sigma$-代数、单调类都是 $\mathcal{P}(X)$ 的某一族子集；
- 生成的 $\sigma$-代数取的就是「一切包含 $\mathcal{E}$ 的 $\sigma$-代数之交」，而 $\mathcal{P}(X)$ 保证这个交不空。

⚠ $\emptyset \in \mathcal{P}(X)$ 且 $X \in \mathcal{P}(X)$ 对一切 $X$ 成立 —— 幂集从来不是空的。

参考：Kunen, Set Theory, I.5

### 星团：关系与函数
> 造出函数：关系加上单值性。顺带造出等价关系与商集 —— 后面 ℤ / ℚ / ℝ 全靠这一招粘出来。

#### 关系　`def.rel`
*定义*　关系（Relation）

设 $A$、$B$ 是集合。

**关系** $R$ 由有序对组成；$R \subseteq A \times B$ 表示 $R$ 是 $A$ 到 $B$ 的关系。

- **定义域** $\operatorname{dom} R = \{ a : \exists b (a, b) \in R \}$；
- **值域** $\operatorname{ran} R = \{ b : \exists a (a, b) \in R \}$；
- **逆** $R^{-1} = \{ (b, a) : (a, b) \in R \}$。

在 ZFC 里关系就是一个集合（由有序对组成），没有额外的原始概念 —— 所以「$\preceq$ 是 $A$ 上的关系」这句话本身是有内容的：它说的是一族有序对。

常见的两类关系：**等价关系**（自反、对称、传递）与**偏序**（自反、反对称、传递）——后者另开一条节点。

参考：Kunen, Set Theory, I.5

#### 函数　`def.function`
*定义*　函数（Function）

设 $f$ 是 $A$ 到 $B$ 的关系。$f$ 是一个**函数**（记 $f : A \to B$），当且仅当对每个输入恰有一个输出：

$$\forall a \in A, \exists! b \in B, (a, b) \in f$$

唯一性使 $f(a) = b$ 这个记号不会歧义；此时 $\operatorname{dom} f = A$，$f$ 的**像**是 $f(A) = \{ f(a) : a \in A \}$。

单射 / 满射 / 双射见另一条节点。

在 ZFC 里「函数就是一种特殊的关系」：它只多了一条要求 —— 每个输入的输出**唯一**。

⚠ 两个容易混的地方：
- 「$f$ 是函数」不要求 $A$ 上处处有定义；要求了才写 $f : A \to B$（即 $\operatorname{dom} f = A$）。
- 像 $f(A)$ 一般只是 $B$ 的子集，满射才要求 $f(A) = B$。

参考：Kunen, Set Theory, I.5

#### 单射 / 满射 / 双射　`def.bijection`
*定义*　单射 / 满射 / 双射（Injective / Surjective / Bijective）

设 $f : A \to B$。

- $f$ **单射**（injective）：$f(a) = f(a') \implies a = a'$，即不同输入给不同输出；
- $f$ **满射**（surjective）：$\forall b \in B, \exists a \in A : f(a) = b$，即 $f(A) = B$；
- $f$ **双射**（bijective）：既单又满。

双射 $f : A \to B$ 的**逆** $f^{-1} : B \to A$ 也是双射（把 $f$ 看作关系时，逆关系就是 $f^{-1}$）。

于是「存在双射 $A \to B$」是集合之间的一种等价关系，用来定义**等势**。

⭐ 单射在这里最常见的用法是**反证**：Hartogs 定理断言「存在不能单射进 $X$ 的序数」，良序定理的证明里「$\alpha \hookrightarrow X$ 不成立」也是同一个句式。

⚠ 「是单射/满射」必须相对**指定的 $B$** 说：同一个函数 $f : \mathbb{R} \to \mathbb{R}$，$x \mapsto x^2$ 既不单也不满；把陪域改成 $[0, \infty)$ 就满了。

参考：Kunen, Set Theory, I.5

#### 商集与等价类　`def.quotient-set`
*定义*　商集 / 等价类（Quotient Set）

设 $\sim$ 是集合 $A$ 上的一个**等价关系**。对 $a \in A$，称

$$[a] := \{ b \in A : b \sim a \}$$

为 $a$ 的**等价类**；称

$$A / \sim\ := \{ [a] : a \in A \}$$

为 $A$ 关于 $\sim$ 的**商集**。三条基本事实：

- $a \in [a]$；
- $[a] = [b] \iff a \sim b$；
- 不同的等价类**两两不交**，且全体之并恰为 $A$ —— 也就是说，等价关系把 $A$ **划分**成一块块。

⭐ 这是数学里「造新对象」最常用的手法：手头只有一类东西，却想得到另一类，就把前者按某个等价关系**粘**起来。本星图里至少四处用到：

- $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/\sim$、$\mathbb{Q} = (\mathbb{Z} \times (\mathbb{Z}\setminus\{0\}))/\sim$、$\mathbb{R} = \{$有理 Cauchy 列$\}/\sim$；
- $L^1$、$L^p$ 的元素其实是**函数的等价类**（a.e. 相等视为同一个）；
- RN 导数 $d\nu/d\mu$ 也是一个等价类，而不是单个函数。

⚠ 等价类的**代表元不唯一**，所以凡是要在商集上定义的东西（运算、序、范数），都必须先证明「与代表元的选取无关」，也就是**良定义**。这是商构造最容易漏掉的一步。

参考：Kunen, Set Theory, I.5

### 星团：基数与等势
> 造出「集合有多大」这把尺子：等势 → 基数 → 可数与不可数 → Cantor 定理 → 基数可比。

#### Hartogs 定理　`thm.hartogs`
*定理*　Hartogs 定理（Hartogs' Theorem, 1915）—— ZF 中即可证明

对任意集合 $X$，都存在一个**不能单射进 $X$** 的序数；取其中最小的那个，记作 $\aleph (X)$，叫做 $X$ 的 **Hartogs 数**（Hartogs 序数）。

$$\forall X \exists\alpha ( \alpha \hookrightarrow  X\text{ 不成立} ),\text{ 且} \alpha = \aleph(X)\text{ 时}: \forall\beta < \alpha, \beta \hookrightarrow  X\text{ 成立}$$

⭐⭐ **它在 ZF 里就能证，不需要选择公理。** 这是它最要紧的性质 —— 正因为不依赖 AC，它才能安全地用在「$AC \implies$ 良序定理」「$AC \implies$ 佐恩引理」这类证明里，用来说明超限递归**必定停下来**，而不至于循环论证。

**证明思路**（全在 ZF 内）：设 $\mathcal{W}$ 为 $X$ 的各个子集上的良序关系全体 —— 它是集合，因为 $\mathcal{W} \subseteq \mathcal{P}(X \times X)$。任意两个这样的良序，较短者必同构于较长者的一个初始段，故按「序型」它们两两可比；由替换公理，这些序型构成一个集合 $A$。$A$ 在 $\in$ 下是传递的良序集，于是 **$A$ 本身就是一个序数 $\alpha$**。若 $\alpha$ 能单射进 $X$，把这个单射搬过去，就得到 $X$ 某个子集上的一个良序、其序型恰为 $\alpha$，即 $\alpha \in A = \alpha$ —— 与序数不能自属矛盾。故 $\alpha$ 不能单射进 $X$。

**它怎样让递归「停」**：超限递归每走一步就吐出 $X$ 的一个新元素。若一直走下去，就会得到 $\aleph (X) \to X$ 的单射，与 $\aleph (X)$ 的定义直接冲突。所以递归必在某个 $\alpha < \aleph (X)$ 处停止。

**一个立刻的推论**：序数全体不构成集合（Burali–Forti 悖论）。在 Hartogs 定理里取 $X =$ 全体序数即可 —— 每个序数都通过恒等映射单射进它。

参考：Hartogs (1915)；Kunen, Set Theory, I.11；Jech, The Axiom of Choice, Ch. 2

#### 可数与不可数　`def.countable`
*定义*　可数 / 至多可数（Countable）

设 $\mathbb{N} = \{0, 1, 2, \ldots\}$ 是自然数集。

集合 $A$ **可数**，当且仅当存在双射 $A \to \mathbb{N}$（即能把 $A$ 排成一个无穷序列 $a_0, a_1, a_2, \ldots$，一个不漏、一个不重）。

既有限又可数的情形合起来叫**至多可数**：$A$ 至多可数 $\iff$ 存在单射 $A \to \mathbb{N}$。

不是至多可数的集合叫**不可数**。

⭐ 这一条撑起了两大块内容：
- **$\sigma$-环 / $\sigma$-代数 / 单调类**：可数并、可数交里的「可数」就是它；
- **测度的可数可加**：$\mu(\bigcup_n E_n) = \sum_n \mu(E_n)$ 里的下标集要可数。

基本事实：$\mathbb{N} \times \mathbb{N}$ 可数；至多可多个可数集的并仍可数；$\mathbb{R}$ 不可数（Cantor 对角线法）。

⚠ 「可数」不是「数得完」：$\mathbb{N}$ 自己就可数但数不完。

参考：Kunen, Set Theory, I.6

#### 等势　`def.equinumerous`
*定义*　等势（Equinumerous）

集合 $A$ 与 $B$ **等势**（记 $|A| = |B|$ 或 $A \approx B$），当且仅当存在**双射**

$$f : A \to B$$

「等势」是集合之间的一种等价关系：自反（恒等映射）、对称（逆映射）、传递（合成）。

⭐ 这是**比较大小的正确方式**：不去数个数（无限集数不完），而是问「能不能一一配对」。

经典结果：
- $\mathbb{N}$ 与 $\mathbb{Q}$、$\mathbb{N} \times \mathbb{N}$ 都等势（可数）；
- $(0, 1)$ 与 $\mathbb{R}$ 等势（$x \mapsto \tan \pi(x - 1/2)$ 之类）；
- $\mathbb{N}$ 与 $\mathbb{R}$ **不等势**（Cantor 定理）。

⚠ $A \subseteq B$ 与「等势」无关：$\mathbb{N} \subset \mathbb{Q}$ 但两者等势 —— 这正是无限集与有限集的分界（Dedekind 的刻画：与某个真子集等势 $\iff$ 无限）。

参考：Kunen, Set Theory, I.6

#### 基数 |A|　`def.cardinal`
*定义*　基数与基数的比较（Cardinality）

等势把「所有集合」分成一个个类。「集合 $A$ 的**基数**」$|A|$ 指的就是 $A$ 所在的这个等势类 —— 它衡量 $A$ 有多大，而不关心 $A$ 的元素是什么。

比较两个基数：

- $|A| \le |B|$：存在**单射** $A \to B$；
- $|A| = |B|$：存在**双射** $A \to B$（等势）；
- $|A| < |B|$：$|A| \le |B|$ 但 $|A| \ne |B|$。

若 $|A| \le |B|$ 且 $|B| \le |A|$，则 $|A| = |B|$（Schröder–Bernstein 定理）。

⭐ 记号的用法：$|\mathbb{N}| = \aleph_0$（可数无限），$|\mathbb{R}| = 2^{\aleph_0}$，且 $\aleph_0 < 2^{\aleph_0}$。

⚠ 严格说来「等势类」不是集合（它是真类），所以 ZFC 里的通行做法是：先有**序数**，再用良序定理（$\iff$ AC）取每个等势类里最小的那个序数作代表，那个序数就叫基数。
> 本星图只用到「$|A| \le |B|$ 靠单射、$|A| = |B|$ 靠双射」这两件事 —— 它们不需要选代表就能用。

⚠ 任意两个基数**不一定可比**，这正是**基数可比定理**（要用 AC）的内容。

参考：Kunen, Set Theory, I.6

#### Cantor 定理　`thm.cantor`
*定理*　Cantor 定理：$|A| < |\mathcal{P}(A)|$

对任意集合 $A$：

$$|A| < |\mathcal{P}(A)|$$

也就是说：**不存在**从 $A$ 到 $\mathcal{P}(A)$ 的满射（当然也不存在双射），但 $a \mapsto \{a\}$ 是单射。

⭐ 推论：**没有最大的基数** —— 从任何集合出发，取幂集就得到更大的。于是

$\aleph_0 < 2^{\aleph_0} < 2^{2^{\aleph_0}} < \cdots$

取 $A = \mathbb{N}$ 就得到「$\mathbb{R}$ 不可数」（$|\mathbb{R}| = 2^{\aleph_0}$）。

证明用的是**对角线法**（见边的证明）：那个「对角集」$D = \{ a \in A : a \notin f(a) \}$ 不在 $f$ 的像里。这是数学史上最会产定理的一个构造，往后 Cantor–Bernstein、Gödel 不完备定理、停机问题用的都是它。

参考：Kunen, Set Theory, I.6

#### Schröder–Bernstein 定理　`thm.schroder-bernstein`
*定理*　Schröder–Bernstein 定理

若存在单射 $f : A \to B$ 与单射 $g : B \to A$，则存在**双射** $A \to B$，即

$$|A| \le |B| \ \text{且}\ |B| \le |A| \implies |A| = |B|$$

⭐ 它的价值在于**省事**：要证两个集合等势，只要各造一个方向的单射，不必显式写出那个双射。（对比：Cantor 定理的另一条路 —— 有单射无满射 —— 用的是对称的说法。）

⚠ 它**不需要**选择公理：证明是构造性的（见边的证明），这也是它比「任意两个基数可比」好用的地方。

参考：Kunen, Set Theory, I.6

#### 基数可比定理　`thm.cardinal-comparable`
*定理*　基数可比定理（需要选择公理）

在**选择公理**下：对任意两个集合 $A$、$B$，必有

$$|A| \le |B| \quad \text{或} \quad |B| \le |A|$$

即任意两个基数都可以比较大小。

⭐ 这条是「基数排序」的许可证：没有它，连「$A$ 比 $B$ 大」这句话都可能毫无意义。

证明路线（见边）：**良序定理**把 $A$、$B$ 都良序化 $\to$ 对应的序数可以比较 $\to$ 于是有一个方向能放进单射。所以这条定理与 AC、良序定理是同一件事的三种说法。

⚠ 没有 AC 时确实有不可比的基数（Jech, *The Axiom of Choice*）。

参考：Jech, The Axiom of Choice, Ch. 3

### 星团：数系的构造
> 造出数本身：ℕ → ℤ → ℚ → ℝ → ℂ。每一步都是同一招 —— 把已有对象按等价关系粘成等价类；ℝ 那一跳是把 ℚ 按 Cauchy 列**完备化**。⚠️ ℝ 是造出来的，三组性质（域、序、确界原理）是**定理**，不是定义。

#### 自然数集存在　`thm.omega`
*定理*　自然数集 $\omega$ 存在

存在**最小归纳集** $\omega$：它含有 $\emptyset$，对 $x \mapsto x \cup \{x\}$ 封闭，且含于一切归纳集之中：

$$\omega = \{ \emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}, \{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\}, \ldots  \}$$

把 $\in$ 读作 $<$，$\langle \omega , \in \rangle$ 就是自然数系 $\langle \mathbb{N}, <\rangle$。

$\omega$ 同时也是最小的极限序数。构造它需要无穷公理 + 幂集公理 + 分离公理模式三者合力。

参考：Kunen, Set Theory, I.5

#### 复数 ℂ　`def.complex`
*定义*　复数系 $\mathbb{C}$（Complex Numbers）

**复数系** $\mathbb{C} := \mathbb{R}^2$，配以下运算：

$$(a, b) + (c, d) := (a + c, b + d), \qquad (a, b)(c, d) := (ac - bd, ad + bc)$$

记 $i := (0, 1)$，则每个复数唯一地写成 $z = a + bi$（$a, b \in \mathbb{R}$）。

$\bar{z} := a - bi$ 是**共轭**，$|z| := \sqrt{a^2 + b^2}$ 是**模**；并且

$$|zw| = |z|\,|w|, \qquad z \bar{z} = |z|^2$$

于是每个 $z \ne 0$ 都有逆 $z^{-1} = \bar{z}/|z|^2$：$\mathbb{C}$ 是一个域。

⭐ $\mathbb{C}$ 与 $\mathbb{R}^2$ 的区别只在乘法 —— 而正是这个乘法让 $\mathbb{C}$ 成为**代数闭域**（每个多项式都有根），也让复值函数的积分理论比实值情形简洁：$|f|$ 与 $L^p$ 理论的表述不必再分正负部。

⚠ **$\mathbb{C}$ 是有序域之外的东西**：它上面**没有**与运算相容的全序。若不然，由 $1 = 1^2 > 0$ 得 $-1 < 0$；可是 $i \ne 0$，而有序域里**平方元非负**，$i^2 = -1$ 应当 $\ge 0$ —— 矛盾。

本星图里 $\mathbb{C}$ 主要出现在两处：复值函数的积分（拆实部虚部）、复测度（取值在 $\mathbb{C}$ 里，自动有限）。

参考：Rudin, Real and Complex Analysis, Ch. 1

#### 归纳原理与递推定义　`thm.induction`
*定理*　归纳原理 / 递推定义（Induction & Recursion）

设 $\omega$ 是最小归纳集（即 $\mathbb{N}$）。

**(i) 归纳原理**：若 $S \subseteq \omega$ 满足

$$\emptyset \in S, \qquad x \in S \implies x \cup \{x\} \in S$$

则 $S = \omega$。

**(ii) 递推定义**：给定集合 $A$、元素 $a_0 \in A$ 与函数 $F : A \to A$，存在**唯一**的函数 $g : \omega \to A$ 使

$$g(\emptyset) = a_0, \qquad g(x \cup \{x\}) = F(g(x)) \quad \forall x \in \omega$$

⭐ **归纳原理管证明，递推定义管构造** —— 两者是一件事的两面，都来自「$\omega$ 是最小归纳集」这一条。

$\mathbb{N}$ 上的加法、乘法、序，以及后面 $\mathbb{Z}$、$\mathbb{Q}$ 的运算，全都是用递推定义出来、再用归纳原理验证性质的。

⚠ **归纳原理只对 $\omega$ 成立**；换成一般的良序集要做**超限归纳 / 超限递归**。
⚠ 递推定义要用「函数 $F$」而不是「一句话」，否则会掉进「用未定义的东西定义自己」的坑。

参考：Kunen, Set Theory, I.5

#### 整数 ℤ　`def.int`
*定义*　整数 $\mathbb{Z}$（由 $\mathbb{N} \times \mathbb{N}$ 构造）

在 $\mathbb{N} \times \mathbb{N}$ 上定义

$$(a, b) \sim (c, d) :\iff a + d = b + c$$

（直观：$(a, b)$ 代表 $a - b$；这条等价关系说的正是「差相同」。）它确实是一个等价关系。令

$$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim$$

元素记作 $[a, b]$（即 $a - b$）。$\mathbb{Z}$ 上的**运算与序**（都要先验证与代表元无关）：

$$[a, b] + [c, d] := [a + c,\ b + d]$$
$$[a, b] \cdot [c, d] := [ac + bd,\ ad + bc]$$
$$[a, b] \le [c, d] :\iff a + d \le b + c$$

其中加法与序来自 $\mathbb{N}$ 的加法与序，乘法的写法是照着 $(a - b)(c - d) = ac + bd - (ad + bc)$ 抄的。

⭐ 动机一句话：**$\mathbb{N}$ 里减法学不通**（$3 - 5$ 不存在），但「$3 - 5$」这个**对**总有意义 —— 于是把「差」本身当成新对象。

副产品：$\mathbb{Z}$ 有加法零元 $[0, 0] = 0$ 与加法逆元 $-[a, b] = [b, a]$ —— 这正是 $\mathbb{N}$ 缺的东西。

⚠ $\mathbb{Z}$ 里 $\mathbb{N}$ 是通过 $a \mapsto [a, 0]$ **嵌进去**的（单射且保持运算与序），所以写 $3 \in \mathbb{Z}$ 时用的是这个嵌入 —— 这一步不能省。

参考：Kunen, Set Theory, I.5

#### 有理数 ℚ　`def.rat`
*定义*　有理数 $\mathbb{Q}$（由 $\mathbb{Z} \times (\mathbb{Z}\setminus\{0\})$ 构造）

在 $\mathbb{Z} \times (\mathbb{Z} \setminus \{0\})$ 上定义

$$(a, b) \sim (c, d) :\iff ad = bc$$

（直观：$(a, b)$ 代表 $a/b$；这条等价关系说的正是「分数值相同」。）令

$$\mathbb{Q} := (\mathbb{Z} \times (\mathbb{Z} \setminus \{0\})) / \sim$$

元素记作 $a/b$。运算与序：

$$\frac{a}{b} + \frac{c}{d} := \frac{ad + bc}{bd}, \qquad \frac{a}{b} \cdot \frac{c}{d} := \frac{ac}{bd}, \qquad \frac{a}{b} \le \frac{c}{d} :\iff ad \le bc \quad (b, d > 0)$$

于是 $\mathbb{Q}$ 是一个**有序域**：四则运算齐全，且与序相容。

⭐ 动机同上：**$\mathbb{Z}$ 里除法学不通**（$1/2$ 不存在），但「分子分母的对」总有意义。

⚠ 分母取自 $\mathbb{Z} \setminus \{0\}$ —— 「$0$ 不能作分母」在这里**不是一条约定，而是构造的一部分**：分母的集合里根本没有 $0$。
⚠ 记号 $a/b$ 会让人以为「$a/b$ 是一个函数值」，其实它是**等价类**；这正好解释了为什么 $\frac{1}{2} = \frac{2}{4}$：它们是同一个等价类的两个代表元。

⭐ **到此为止四则运算齐全了，但序还不完备**：$\{q \in \mathbb{Q} : q^2 < 2\}$ 有上界（比如 $2$）却在 $\mathbb{Q}$ 里没有上确界。这正是 $\mathbb{R}$ 要补的那一口气。

参考：Kunen, Set Theory, I.5

#### 绝对值 |x|　`def.abs`
*定义*　绝对值 $|x|$（Absolute Value）

设 $K$ 是**有序域**（$\mathbb{Q}$ 与 $\mathbb{R}$ 都是），$x \in K$。定义

$$|x| := \begin{cases} x, & x \ge 0 \\ -x, & x < 0 \end{cases} \qquad\text{即}\qquad |x| = \max\{x, -x\}$$

于是 $|x| \ge 0$ 恒成立，且 $|x| = 0 \iff x = 0$。

⭐ 读法：$|x|$ 是**到原点的距离**，与符号无关。两点之间的距离就是 $|x - y|$ —— 这就是后来**距离空间**里那个距离的原型：把「差」扔掉，只留下「距离」这个概念本身。

立刻能验证的两条（都由定义分情形）：
- $|-x| = |x|$；
- $|xy| = |x|\,|y|$。

⚠ **不等号那一侧的估计不属于定义**：$|x + y| \le |x| + |y|$ 是一条**定理**（见「三角不等式」）—— 定义里只有分情形，没有不等式。

参考：Rudin, Principles of Mathematical Analysis, Ch. 1

#### 三角不等式　`thm.triangle`
*定理*　三角不等式 $|x + y| \le |x| + |y|$

设 $K$ 是有序域（如 $\mathbb{Q}$、$\mathbb{R}$），$x, y \in K$。则

$$|x + y| \le |x| + |y|$$

并且由此得到两个常用的变形：

$$\big| |x| - |y| \big| \le |x - y|, \qquad |x_1 + x_2 + \cdots + x_n| \le |x_1| + |x_2| + \cdots + |x_n|$$

（后者由前者对 $n$ 归纳。）

⭐ 这是**一切估计的起点**：Cauchy 列的线性运算、极限的四则运算、级数的比较判别法、距离空间里那条 $d(x, z) \le d(x, y) + d(y, z)$，归根到底都是它（距离空间那条是把它**取作公理**）。

⚠ 证明只有分情形，没有任何技巧 —— 但**「$a \le |a|$ 且 $-a \le |a|$」这两句是全部的关键**：由它得 $-(|x| + |y|) \le x + y \le |x| + |y|$，而 $|t| \le c \iff -c \le t \le c$（$c \ge 0$）。

参考：Rudin, Principles of Mathematical Analysis, Ch. 1

#### Cauchy 列与零列　`def.cauchy-null`
*定义*　有理 Cauchy 列 / 零列 / 等价（Cauchy & Null Sequences）

设 $(x_n)$ 是**有理数列**（即函数 $\omega \to \mathbb{Q}$），$|x|$ 是 $\mathbb{Q}$ 上的绝对值，$\varepsilon$ 一律取**正有理数**（此时还不需要实数）。

$(x_n)$ 是 **Cauchy 列**：

$$\forall \varepsilon > 0,\ \exists N,\ \forall m, n \ge N : |x_m - x_n| < \varepsilon$$

$(x_n)$ 是**零列**：

$$\forall \varepsilon > 0,\ \exists N,\ \forall n \ge N : |x_n| < \varepsilon$$

两个 Cauchy 列**等价**：

$$(x_n) \sim (y_n) :\iff (x_n - y_n) \text{ 是零列}$$

（$\sim$ 是等价关系：自反、对称显然，传递由三角不等式。）

⭐ **为什么要「模去零列」**：同一个实数有很多种逼近方式 —— 比如 $(1, 1, 1, \ldots)$ 与 $(1.1,\ 1.01,\ 1.001,\ \ldots)$ 都该代表 $1$，而它们的差是零列。等价类把「同一个数的不同逼近」粘成一件事。

⚠ 这里**只用 $\mathbb{Q}$ 的序与绝对值**（$\varepsilon$ 取正有理数、绝对值是 $\mathbb{Q}$ 上的），所以**不构成循环**：这一步在造出 $\mathbb{R}$ 之前完全说得通。度量空间里那套「距离、Cauchy 列、完备」的语言，正是从这里的做法抽出来的。

三条后面要用的事实：
- Cauchy 列**有界**；
- Cauchy 列的**和、差、积仍是 Cauchy 列**；
- **不是零列的 Cauchy 列，从某一项起 $|x_n| \ge \delta$**（某个正有理数 $\delta$）—— 于是它的倒数（去掉前面有限项）也是 Cauchy 列。第三条是「乘法有逆元」的全部依据。

参考：Rudin, Principles of Mathematical Analysis, Ch. 3

#### 实数系 ℝ　`def.real`
*定义*　实数系 $\mathbb{R}$（由 Cauchy 列构造）

记 $\mathcal{C}$ 为全体**有理 Cauchy 列**，$\sim$ 是「差为**零列**」这个等价关系（见「Cauchy 列与零列」）。令

$$\mathbb{R} := \mathcal{C} / \sim$$

元素是等价类 $[x_n]$。运算**逐项**定义，序用代表元定义：

$$[x_n] + [y_n] := [x_n + y_n], \qquad [x_n] \cdot [y_n] := [x_n y_n]$$

$${}[x_n] > 0 :\iff \exists q \in \mathbb{Q},\ q > 0,\ \exists N,\ \forall n \ge N : x_n \ge q$$

（一般的序由 $[y_n] \ge [x_n] :\iff [y_n - x_n] \ge 0$ 给出。）零与一取常数列：

$$0 := [(0,0,0,\ldots)], \qquad 1 := [(1,1,1,\ldots)]$$

最后，$\mathbb{Q}$ 通过**常数列**嵌入 $\mathbb{R}$：

$$q \mapsto [(q, q, q, \ldots)]$$

⭐ **这就是构造**：$\mathbb{R}$ 不被假定存在，它由**上一层的对象**粘出来 —— 有理数（$\mathbb{Q}$）$\to$ 有理数列（函数 $\omega \to \mathbb{Q}$）$\to$ 其中的 Cauchy 列 $\to$ 按等价关系取商集。每一步都只用到已经有的东西，一个新的对象都没有凭空进来。

- 元素是**等价类**，不是序列本身；否则同一个数的不同逼近方式会变成不同的实数。
- 运算与序是**用代表元写出来的**，所以必须验证它们**与代表元的选取无关**（良定义）—— 这是商构造最容易漏的一步。

⭐ 这一手法的**一般化就是「度量空间的完备化」**：把 $\mathbb{Q}$ 换成任意度量空间 $(X, d)$，把 $|x_m - x_n|$ 换成 $d(x_m, x_n)$，「取 Cauchy 列、模去零列」照搬无误 —— $\mathbb{R}$ 的构造是它的原型。

📌 **三组性质不在定义里**：域公理、序公理、确界原理都是关于这个构造的**定理**（见「$\mathbb{R}$ 是完备有序域」）。存在性由构造给出，不需要公理。

📌 另一条路是**戴德金分割**（取 $\mathbb{Q}$ 的满足「非空、有上界、无最大元」的子集作为元素）：路数不同，造出来的对象同构 —— 见「完备有序域的唯一性」。

参考：Rudin, Principles of Mathematical Analysis, Ch. 3；Tao, Analysis I, Ch. 5

#### 阿基米德性质　`lem.archimedean`
*引理*　阿基米德性质与 $\mathbb{Q}$ 的稠密性

设 $K$ 是一个**完备有序域**（比如 $\mathbb{R}$）。则：

**(i) 阿基米德性质**：自然数在 $K$ 中没有上界 ——

$$\forall x \in K,\ \exists n \in \mathbb{N} : n > x$$

**(ii) $\mathbb{Q}$ 在 $K$ 中稠密**：任意两个元素之间都夹着一个有理数 ——

$$\forall x, y \in K,\ x < y \implies \exists q \in \mathbb{Q} : x < q < y$$

（这里的 $\mathbb{Q}$ 指 $\mathbb{Q}$ 在 $K$ 中的嵌入像：$1$ 在 $K$ 中生成 $\mathbb{Z}$，再取分式得到 $\mathbb{Q}$。）

⭐ 两条都是**完备性（确界原理）的推论**，不需要任何别的假设。

它们的用处很大：
- 证明**完备有序域的唯一性**（$\mathbb{R}$ 的良定义性）时要靠 (ii) —— 有理数在两边都稠密，才能用「有理数的像」去逼近任意元；
- 分析里所有的「取 $n$ 足够大」「取 $\varepsilon = 1/n$」实质上都是在用 (i)；
- (ii) 也是「用有理数逼近实数」的许可证：任何实数都是有理数的上确界。

⚠ 完备性 $\implies$ 阿基米德性，但**反过来不成立**：$\mathbb{Q}$ 是阿基米德的，然而不完备。
⚠ (ii) 中夹着的那个 $q$ 必须**严格**在两个数之间 —— 这正是「稠密」比「有任意接近的有理数」强的地方。

参考：Tao, Analysis I, Ch. 5（实数的构造）；Rudin, Principles of Mathematical Analysis, Ch. 1

#### 完备有序域的唯一性　`thm.real-unique`
*定理*　任何完备有序域都与 $\mathbb{R}$ 同构（构造无关性）

设 $K$ 是**完备有序域**。则存在**唯一**的双射 $f : \mathbb{R} \to K$，它同时保持加法、乘法与序：

$$f(x + y) = f(x) + f(y), \qquad f(xy) = f(x)\,f(y), \qquad x \le y \iff f(x) \le f(y)$$

也就是说：$\mathbb{R}$ 之外没有别的完备有序域 —— 任何一个都与它同构。

⭐ **这条定理说的是「构造之间的一致性」**：$\mathbb{R}$ 的存在性已经由构造给出（不需要它），它说的是换一条路造 $\mathbb{R}$（Cauchy 列、戴德金分割、小数展开……）得到的是**同一个对象** —— 所以「$\mathbb{R}$ 有什么性质」不取决于选了哪条路，两条路造出来的东西可以互相替换。

证明三步（见边）：把 $1$ 的像固定 $\implies$ $\mathbb{Q}$ 的嵌入像被唯一确定；$\implies$ 用**上确界**把映射推广到整个 $K$（这才是要用完备性的地方）；$\implies$ 唯一性靠「$\mathbb{Q}$ 在 $K$ 中稠密」把两个同构逼成同一个。

⚠ 少任何一条公理，唯一性就没了：$\mathbb{Q}$ 不是唯一的有序域（$\mathbb{Q}(\sqrt{2})$ 是另一个），$\mathbb{Q}$ 与 $\mathbb{Q}(\sqrt 2)$ 作为有序域不同构，两者都满足「有序域」的全部公理。

参考：Tao, Analysis I, Ch. 5（实数的构造）

#### ℝ 不可数　`thm.real-uncountable`
*定理*　实数集是稠密而不可数的：$|\mathbb{R}| = 2^{\aleph_0}$

**实数集 $\mathbb{R}$ 不可数**：不存在从 $\mathbb{N}$ 到 $\mathbb{R}$ 的满射，即 $\mathbb{R}$ 不能排成一个序列。

更强的结论：

$$|\mathbb{R}| = |\mathcal{P}(\mathbb{N})| = 2^{\aleph_0} > \aleph_0$$

⭐ 证明走**闭区间套 + 对角线**（见边）：假设 $\mathbb{R}$ 可以排成 $x_1, x_2, \ldots$，就用二分法造一串套起来的闭区间，把 $x_n$ 逐个排除出去，再用**完备性**取出它们唯一的公共点 —— 它不等于任何一个 $x_n$。

⚠ 整段证明**只用到 $\mathbb{R}$ 的完备性**（确界原理），不需要基数理论；$|\mathbb{R}| = 2^{\aleph_0}$ 那一半是拿二进制展开与 $\mathcal{P}(\mathbb{N})$ 配对，再引用 Cantor 定理。

**这条定理最反直觉的地方**：$\mathbb{Q}$ 与 $\mathbb{R}$ 都稠密、都可以逼近彼此，但 $\mathbb{Q}$ 可数（排得成一个序列）、$\mathbb{R}$ 不可数。**「稠密」与「一样多」是两回事** —— 这也正是分析必须做实数、不能只做有理数的根本原因。

参考：Tao, Analysis I, Ch. 8（可数性）；Rudin, Principles of Mathematical Analysis, Ch. 2

### 星团：序数与超限
> 造出「无穷有多长」这把尺子：良序集的序型 → von Neumann 序数（传递的良序集）→ 三歧性 → 超限递归 / 超限归纳，顺带发现序数全体是真类。

#### 序数　`def.ordinal`
*定义*　序数（von Neumann Ordinal）

集合 $\alpha$ 称为**序数**（von Neumann 序数），当且仅当：

1. **$\alpha$ 是传递的**：$\forall x \in \alpha,\; x \subseteq \alpha$（元素的元素仍是元素）；
2. **$\in$ 在 $\alpha$ 上是良序**：把 $\in$ 限制到 $\alpha$ 上，$\alpha$ 成为**良序集** —— 即对任意 $x, y \in \alpha$，$x \in y$、$x = y$、$y \in x$ 恰有一个成立，且 $\alpha$ 的每个非空子集有 $\in$-最小元。

由传递性，$\alpha$ 的**每个元素本身也是序数**。约定：$0 := \emptyset$，**后继序数** $\alpha + 1 := \alpha \cup \{ \alpha \}$；不含最大元的非零序数叫**极限序数**，$\omega$ 是最小的极限序数。序数全体记作 $\mathrm{On}$。

开头的几个：$\emptyset,\ \{ \emptyset \},\ \{ \emptyset, \{ \emptyset \} \},\ \ldots$，即 $0, 1, 2, \ldots$；接着是 $\omega,\ \omega + 1,\ \omega + 2,\ \ldots,\ \omega + \omega,\ \ldots$

⭐⭐ **格式还是「集合 + 关系 + 公理」**：序数不是凭空的对象 —— 一个**传递集**，配上 $\in$ 这个**现成的**关系，就定出了一个序数。判别一个集合是不是序数，就是核对这两条。

⭐⭐ **为什么不让「序型」当对象** —— 这是本包最要紧的一步：序型是同构类，而所有良序集的序型构成真类，取不出来（见「序数全体是真类」）。序数绕开了这件事：它给每个序型挑了一个**具体的代表**，就是一个传递的良序集。于是「序型之间的比较」变成「$\in$ 的比较」，可以真刀真枪地算。

⚠ **$\alpha \in \beta$ 与 $\alpha < \beta$ 是同一件事**：序数上的 $\in$ 就是它的序。写 $\alpha < \beta$ 时，背后用的其实是 $\in$。

⚠ 序数不只是「$\mathbb{N}$ 的推广」。$\omega$ 之后的序数一个比一个长，但它们的**大小**（基数）可以一直停在 $\aleph_0$ —— 在序数里，「更长」与「更大」是两件事。

参考：Kunen, Set Theory, I.11；Jech, Set Theory, 2.2

#### 超限递归　`thm.recursion-wellorder`
*定理*　良序集上的递归定理（含超限归纳）

设 $(W, \preceq )$ 是**良序集**，$G$ 是任给的函数（可以取在一整个真类上）。记 $W_{< w} = \{ v \in W : v \prec w \}$。则存在**唯一**的函数 $F$ 定义在 $W$ 上，使

$$F(w) = G\big( F \upharpoonright W_{< w} \big), \qquad \forall w \in W$$

也就是说：**每一步只依赖前面已经取到的值**。

**推论（超限归纳）**：若 $S \subseteq W$ 且 $\forall w \in W\; ( W_{< w} \subseteq S \to w \in S )$，则 $S = W$。

取 $W = \omega$，就是 $\mathbb{N}$ 上的**递推定义**与**数学归纳法**；$W$ 取任意良序集，就是**超限递归**与**超限归纳**。

⭐⭐ 这是「**在无穷上做构造**」的许可证。在此之前，能用来造东西的只有有限的几步（配对、并、幂集、分离、替换）；要造出一整族互相依赖的对象，靠的就是这一条。它也是「良序」这个词真正的用途 —— 良序保证每一步之前的部分**有头有尾**，递归才停得下来。

⭐ **为什么收「良序集」版而不是「序数」版**：$\omega$ 上的递推、序数上的超限递归都是它的特例，所以只收最通用的一条。（例外：$\mathbb{N}$ 上的数学归纳法另有更直接的来路 —— 它来自「$\omega$ 是最小归纳集」，不需要良序性的一般理论，所以那个节点保留。）

⚠ 递归式右边给的是「前面全部取值」这个**函数** $F \upharpoonright W_{< w}$，而不是一句话。写成一句话就会掉进「用未定义的东西定义自己」的坑。

参考：Kunen, Set Theory, I.9；Jech, Set Theory, 2.3

#### 序数可比　`thm.ordinal-trichotomy`
*定理*　序数的三歧性：$\in$ 在 $\mathrm{On}$ 上是良序

对任意两个序数 $\alpha, \beta$，下式**恰有一个**成立：

$$\alpha \in \beta, \qquad \alpha = \beta, \qquad \beta \in \alpha$$

特别地，$\in$ 在序数全体上是**良序**：任意非空的一族序数都有最小元。

⭐ 三歧性使序数可以当「坐标」用：任意两个**良序集**的序型一定可比，而且**不需要选择公理**。

⚠ 这与「任意两个**基数**可比」完全是两件事，后者要用 AC（见「基数可比定理」）。差别在于序数**自带**一个良序 —— 就是 $\in$；而一般的集合没有先验的良序，要给它找一个，那正是良序定理（$\iff$ 选择公理）的内容。

参考：Kunen, Set Theory, I.11

#### 良序集的序型　`thm.wellorder-ordinal`
*定理*　每个良序集序同构于唯一的序数

设 $(W, \preceq )$ 是**良序集**。则存在**唯一**的序数 $\alpha$，使 $(W, \preceq )$ 与 $(\alpha, \in)$ **序同构**。这个 $\alpha$ 称为 $W$ 的**序型**，记作 $\operatorname{ot}(W) = \alpha$。

⭐⭐ 这一条就是「序数」这个东西真正被**造出来**的地方：序数不是先验摆在那里的，它由「每个良序集对应的那个规范良序集」给出 —— 而那个规范集是由**递归定理**一步步算出来的。

⭐ 于是「$W$ 有多长」变成「$\operatorname{ot}(W)$ 是哪个序数」，两个良序集比长短变成比 $\in$ —— 这就是三歧性的用处。

⚠ **唯一性**这一半要用到三歧性：两个序数若互相序同构，就必须相等。

参考：Kunen, Set Theory, I.11；Jech, Set Theory, 2.3

#### 序数全体是真类　`thm.burali-forti`
*定理*　Burali–Forti：序数全体不构成集合

序数全体 $\mathrm{On}$ **不构成集合**（它是一个**真类**）：不存在一个集合，它的元素恰好是全部序数。

证明只有一行：若 $\mathrm{On}$ 是集合，则它是**传递的**（序数的元素还是序数），$\in$ 在它上面是**良序**（三歧性给出可比性），于是 $\mathrm{On}$ 本身就是一个序数，从而 $\mathrm{On} \in \mathrm{On}$ —— 与序数不能自属矛盾（$\in$ 在序数上是良序，不允许 $\in$-循环）。

⭐ 这正是 **Hartogs 定理**的另一面：序数多到装不进任何集合。「存在不能单射进 $X$ 的序数」与「序数全体是真类」说的是同一件事。

⚠ 与 Russell 悖论的关系：两者都是「把某个『全体』当成集合」引起的矛盾。在 ZFC 里它们的解决方式也一样 —— 那个「全体」是真类，不是集合，因此分离公理模式根本无从下手。

参考：Kunen, Set Theory, I.11；Jech, Set Theory, 2.2

## 星系：序理论（Order Theory）
> 偏序、格、链与完备性；佐恩引理一类「极大原理」的舞台。

### 星团：序结构
> 造出「偏序集」这套舞台：链、上界、极大元、良序、有限特征。

#### 偏序集　`def.poset`
*定义*　偏序集 / 全序集（Partially Ordered Set）

设 $\preceq$ 是集合 $A$ 上的二元关系。$\preceq$ 是 **$A$ 上的偏序**，当且仅当：

- **自反**：$\forall x \in A, x \preceq x$；
- **反对称**：$\forall x, y \in A ( x \preceq y \wedge y \preceq x \to x = y )$；
- **传递**：$\forall x, y, z \in A ( x \preceq y \wedge y \preceq z \to x \preceq z )$。

若还满足 **可比性** $\forall x, y \in A ( x \preceq y \vee y \preceq x )$，则 $\preceq$ 称为 **$A$ 上的全序**（线性序），$(A, \preceq )$ 称为全序集。

称 $(A, \preceq )$ 为**偏序集**。由 $\preceq$ 定义**严格序**：$x \prec y :\iff x \preceq y \wedge  x \ne y$

典型例子：$\langle \mathcal{P}(S), \subseteq \rangle$ 是偏序集但不是全序集；$\langle \mathbb{R}, \le \rangle$ 是全序集。

反对称性是说：只允许「相等」这一种互相 $\le$ 的方式，所以偏序可以看成「$\le$ 的抽象」。

参考：Kunen, Set Theory, I.11；Davey & Priestley, Introduction to Lattices and Order

#### 链　`def.chain`
*定义*　链 / 反链（Chain / Antichain）

设 $(P, \preceq )$ 是偏序集，$C \subseteq P$。

**$C$ 是链**（也叫全序子集），当且仅当 $C$ 中任意两个元素都可比：

$$\forall x, y \in C ( x \preceq y \vee  y \preceq x )$$

**$C$ 是反链**，当且仅当 $C$ 中任意两个不同元素都不可比。

约定：$\emptyset$ 与单点集都算链。

「链」这个词是佐恩引理、Hausdorff 极大原理的中心概念——它们说的都是「链能长到多大」。

参考：Kunen, Set Theory, I.11

#### 界与确界　`def.bound`
*定义*　上界 / 下界 / 确界 / 极大元（Bounds, Suprema & Extremal Elements）

设 $(P, \preceq )$ 是偏序集，$S \subseteq P$，$u, l, m \in P$。

- **$u$ 是 $S$ 的上界**：$\forall s \in S, s \preceq u$。
- **$l$ 是 $S$ 的下界**：$\forall s \in S, l \preceq s$。
- **$u$ 是 $S$ 的上确界**（记 $\sup S$）：$u$ 是上界，且 $u \preceq$ 每一个上界 —— 即**最小**的上界。
- **$l$ 是 $S$ 的下确界**（记 $\inf S$）：$l$ 是下界，且每一个下界 $\preceq l$ —— 即**最大**的下界。
- **$m$ 是 $P$ 的极大元**：$\forall x \in P ( m \preceq x \to x = m )$，即没有比 $m$ 更大的元素。
- **$m$ 是 $P$ 的最大元**：$\forall x \in P, x \preceq m$，即 $m$ 比所有元素都大。

把 $\preceq$ 换成 $\succeq$，前四条里的「上 / 大 / 极大」就变成「下 / 小 / 极小」。

⚠ **极大元 $\ne$ 最大元**；**$\sup S$ 不必属于 $S$**（$\sup (0, 1) = 1$）—— 这是两组容易混的东西。

偏序集里一般不保证 $\sup$ 存在；$\mathbb{R}$ 的特别之处正是**保证它存在**，那就是**确界原理**（见「$\mathbb{R}$ 是完备有序域」）。

例子：$P = \{ \{1\}, \{2\} \}$ 按 $\subseteq$ 排序。两个元素都是极大元（谁也包不住谁），但没有最大元。

在**全序**集里两者才重合。偏序集里「极大」只要求「上面没有别人」，不要求「下面有所有人」。

佐恩引理保证的是极大元，而不是最大元——这一点在应用时最容易出错。

在 $\mathbb{R}$ 上 $u = \sup S$ 有一个只用序的等价说法：$\forall \varepsilon > 0, \exists s \in S : s > u - \varepsilon$（任意近地逼近，但不必取到）。

参考：Kunen, Set Theory, I.11；Rudin, Principles of Mathematical Analysis, Ch. 1

#### 良序集　`def.wellorder`
*定义*　良序集（Well-Ordered Set）

全序集 $(W, \preceq )$ 是**良序的**，当且仅当 $W$ 的每个非空子集都有最小元：

$$\forall S \subseteq W ( S \ne \emptyset \to \exists m \in S, \forall s \in S, m \preceq s )$$

等价于：不存在无穷严格递减链 $w_{0} \succ w_{1} \succ w_{2} \succ \cdots$。

⭐ **良序的用处只有一个：让「下一步」有定义。** 每一步之前的部分有头有尾，于是可以做**超限归纳**（证明）与**超限递归**（构造）—— 见「良序集上的递归定理」。

⭐ 每个良序集都**序同构于唯一的一个序数**（见「良序集的序型」），那个序数就是它的「长度」。于是「两个良序集谁更长」变成「两个序数谁大」，而序数的大小就是 $\in$。

$\langle \mathbb{N}, \le \rangle$ 是良序的；$\langle \mathbb{Z}, \le \rangle$、$\langle \mathbb{R}, \le \rangle$ 不是（$\mathbb{R}$ 的某些非空子集没有最小元）。

参考：Kunen, Set Theory, I.11

#### 有限特征　`def.finchar`
*定义*　有限特征族（Family of Finite Character）

集合族 $\mathcal{A}$ 具有**有限特征**，当且仅当对任意集合 $X$：

$$X \in \mathcal{A} \iff X\text{ 的每个有限子集都属于} \mathcal{A}$$

也就是说：「局部地看起来像 $\mathcal{A}$ 的成员」$\implies$「整体就是 $\mathcal{A}$ 的成员」。

典型例子：

- 偏序集 $P$ 的**链族**（$X$ 是链 $\iff X$ 的每个二元子集可比）；

- 向量空间的**线性无关子集族**；

- 某个滤子之上的**滤子族**。



有限特征是 Tukey 引理的用武之地：只要目标族具有有限特征，极大元就自动存在（在 AC 之下）。

参考：Jech, The Axiom of Choice, Ch. 2

#### 序同构　`def.order-iso`
*定义*　序同构与序型（Order Isomorphism）

设 $(A, \preceq )$ 与 $(B, \sqsubseteq )$ 是**偏序集**。双射 $f : A \to B$ 称为**序同构**，当且仅当

$$\forall a, b \in A\; ( a \preceq b \iff f(a) \sqsubseteq f(b) )$$

即 $f$ 与 $f^{-1}$ **都保序**。此时称 $A$ 与 $B$ **序同构**，记 $A \cong B$。

⭐ **序同构比「同构」严**：它要求**双向**保序，只要求 $f$ 保序是不够的 —— $f$ 保序且是双射时，$f^{-1}$ 不一定保序。

⭐ **良序集上就省事了**：若两个良序集之间有**保序单射**，它自动是到某个初始段的序同构 —— 不必再回头验逆映射。这条性质是「序数可以比较」的全部技术来源。

⚠ **序型**是序同构给出的等价类。良序集的序型**不是集合**：所有良序集的序型凑在一起构成真类，用一个具体的代表来替代它 —— 那就是序数。

参考：Kunen, Set Theory, I.11；Jech, Set Theory, 2.2

### 星团：选择原理
> 造出存在性证明的万能发动机：选择公理 ⟺ 良序定理 ⟺ 佐恩引理 ⟺ Hausdorff 极大原理 ⟺ Tukey 引理。五个说法是一个强连通块，永远同层。

#### 选择公理　`ax.choice`
*公理*　选择公理（Axiom of Choice, AC）

任意一族非空集合都可以「同时」各挑出一个元素。写成选择函数的形式：

$$\forall F [ ( \forall X \in F, X \ne \emptyset ) \to \exists f ( f\text{ 是函数} \wedge  \operatorname{dom} f = F \wedge  \forall X \in F, f(X) \in X ) ]$$

另一种常见形式（两两不交形式）：若 $F$ 是两两不交的非空集合族，则存在集合 $C$，使对每个 $X \in F$ 都有 $|C \cap X| = 1$。

选择函数 $f$ 就是「同时挑元素」的工具；AC 断言这种同时挑选永远做得到。

AC 与 ZF 独立：Gödel (1938) 证明 $Con(ZF) \to Con(ZF + AC)$，Cohen (1963) 证明 $Con(ZF) \to Con(ZF + \neg AC)$。

它是本星系里大量命题的枢纽——佐恩引理、良序定理、Hausdorff 极大原理、Tukey 引理都与它等价。

有限个非空集合可以逐个挑选，这正是 AC 只在无穷情形才显出力量的原因。

参考：Jech, The Axiom of Choice；Kunen, Set Theory, I.12

#### 选择函数　`def.choicefn`
*定义*　选择函数（Choice Function）

设 $F$ 是一个集合族，且 $\emptyset \notin F$。

$f$ 是 $F$ 的**选择函数**，当且仅当

$f$ 是函数，$\operatorname{dom} f = F$；
$\forall X \in F, f(X) \in X$。

即：$f$ 从 $F$ 的每一个成员里各挑出一个元素。

于是选择公理可以简洁地写成：**每个满足 $\emptyset \notin F$ 的集合族 $F$ 都有选择函数**。

若 $F$ 有限，逐个挑选即可，无需 AC。难点只在无穷族，尤其是不可数族。

参考：Jech, The Axiom of Choice

#### 良序定理　`thm.wellordering`
*定理*　良序定理 / 良序原理（Well-Ordering Theorem, Zermelo 1904）

每个集合都能被赋予一个良序：

$$\forall X \exists\preceq ( \preceq\text{ 是} X\text{ 上的良序关系} )$$

换句话说：任何集合 $X$ 都与某个序数等势。

特别地，每个集合都有基数；实数集上存在良序（但这个良序无法被显式写出）。

Zermelo 1904 年为证明「每个集合可良序」而明确提出了选择公理，这也是 AC 第一次登场。

由良序定理可立刻得到**基数可比定理**：任意两个集合的基数都可比较大小。

在 ZF 中不能证明它；但由它和 ZF 可推出 AC，所以两者等价。

参考：Zermelo (1904)；Kunen, Set Theory, I.12

#### 佐恩引理　`lem.zorn`
*引理*　佐恩引理（Zorn's Lemma）

设 $(P, \preceq )$ 是**非空**偏序集。若 $P$ 的每个链在 $P$ 中都有上界，则 $P$ 有**极大元**。

$$P \ne \emptyset \wedge  ( \forall C \subseteq P, C\text{ 是链} \to \exists u \in P, u\text{ 是} C\text{ 的上界} ) \implies \exists m \in P, m\text{ 是极大元}$$

两个条件都不可省：空偏序集没有极大元；"每个链有上界"保证不了「最大元」——只能保证极大元。

它是「存在性证明的万能发动机」：向量空间有基、环有极大理想、紧致性定理、Hahn–Banach 定理……全都靠它。

名字有历史偶然性：Zorn 1940 年代把它推广开来，Kuratowski 1922 年已证过等价形式，所以也叫 Kuratowski–Zorn 引理。

⚠ 非构造性：得到的是「存在一个极大元」，通常无法给出具体是哪一个。

参考：Zorn (1935)；Kunen, Set Theory, I.12

#### Hausdorff 极大原理　`thm.hausdorff`
*定理*　Hausdorff 极大原理 / 极大公理（Hausdorff Maximal Principle, 1914）

设 $(P, \preceq )$ 是偏序集，$C_{0} \subseteq P$ 是链。则存在 $P$ 的**极大链** $M$ 使 $C_{0} \subseteq M$。

其中「极大链」指在包含关系 $\subseteq$ 下极大的链：若 $M \subseteq M' \subseteq P$ 且 $M'$ 也是链，则 $M' = M$。

取 $C_{0} = \emptyset$ 即得：**每个非空偏序集都有极大链。**

形式上它比佐恩引理更早（Hausdorff, 1914），并且与佐恩引理等价。

极大链的存在性正是「从下往上一点点加元素直到加不动」这一直觉的严格化。

参考：Hausdorff (1914)；Kunen, Set Theory, I.12

#### Tukey 引理　`lem.tukey`
*引理*　Tukey 引理（Tukey's Lemma / Teichmüller–Tukey）

设 $\mathcal{A}$ 是**具有有限特征的非空集合族**，则 $(\mathcal{A}, \subseteq )$ 有极大元。

即：存在 $A \in \mathcal{A}$，使得不存在 $B \in \mathcal{A}$ 满足 $A \subset B$。

Tukey 引理的好处是「免验证」：只要目标族具有有限特征，就可以跳过「每个链都有上界」这一繁琐检查。

例：线性无关集族具有有限特征（$X$ 线性无关 $\iff X$ 的每个有限子集线性无关），所以「线性无关集可扩充为极大线性无关集」自动成立。

等价形式：Teichmüller (1939) 与 Tukey (1940) 都独立陈述过它。

参考：Tukey (1940)；Jech, The Axiom of Choice, Ch. 2

## 星系：拓扑学（Topology）
> 开集、连续、紧致与连通；大量定理依赖选择原理。

### 星团：拓扑空间
> 造出「开集」这套不依赖距离的语言：拓扑空间 → 闭集与闭包 → 基 → 连续映射 → 同胚。

#### 拓扑空间与开集　`def.topology`
*定义*　拓扑空间 / 开集（Topological Space）

设 $X$ 是集合，$\mathcal{T} \subseteq \mathcal{P}(X)$ 是 $X$ 的一族子集。$(X, \mathcal{T})$ 是一个**拓扑空间**，$\mathcal{T}$ 叫作 $X$ 上的一个**拓扑**，当且仅当：

1. **含两端**：$\emptyset \in \mathcal{T}$ 且 $X \in \mathcal{T}$；
2. **任意并封闭**：$\{ U_i \}_{i \in I} \subseteq \mathcal{T} \implies \bigcup_{i \in I} U_i \in \mathcal{T}$（$I$ 任意，可以不可数）；
3. **有限交封闭**：$U, V \in \mathcal{T} \implies U \cap V \in \mathcal{T}$。

$\mathcal{T}$ 的成员称为**开集**，它们的补集称为**闭集**。

⭐ 这三条公理是把「实数上开区间的性质」抽象出来的结果：任意多个开集并起来还是开集，但只有**有限**个开集交起来才保证是开集（$\bigcap_n (-1/n, 1/n) = \{0\}$ 不是开集）。

这套语言的好处是**只留下「哪些集合算开」这一件事**，于是距离、度量、坐标全都可以扔掉 —— 连续、紧、连通、极限这些概念照样能说。

⚠ 同一集合上可以有多个不同的拓扑；比较时用「更细 / 更粗」而不是大小。

参考：Munkres, Topology, Ch. 2

#### 闭集与闭包　`def.closed-set`
*定义*　闭集 / 闭包 / 稠密（Closed Set, Closure）

设 $(X, \mathcal{T})$ 是拓扑空间。

- $F \subseteq X$ 是**闭集**：$X \setminus F$ 是开集；
- $A \subseteq X$ 的**闭包** $\operatorname{cl} A$：一切包含 $A$ 的闭集之交（最小的那个闭集）；
- $A$ **稠密**：$\operatorname{cl} A = X$；
- $x$ 的**邻域**：任何含 $x$ 的开集（的包含者）。

由 De Morgan 律，开集的三条公理翻译成闭集就是：$\emptyset, X$ 闭；**任意**交闭；**有限**并闭。

⭐ 开与闭不是互斥的：$\emptyset$ 与 $X$ 既开又闭；在 $\mathbb{R}$ 里 $[0, 1]$ 是闭的，$[0, 1)$ 既不开也不闭。

闭包是「把极限点都收进来」：在距离空间里 $\operatorname{cl} A$ 恰好是「$A$ 中某个序列的极限」全体。

参考：Munkres, Topology, Ch. 2

#### 基与子基　`def.topology-base`
*定义*　拓扑的基 / 子基（Basis, Subbasis）

设 $(X, \mathcal{T})$ 是拓扑空间，$\mathcal{B} \subseteq \mathcal{T}$。$\mathcal{B}$ 是拓扑 $\mathcal{T}$ 的一组**基**，当且仅当每个开集都是 $\mathcal{B}$ 中若干成员之并；等价条件：

1. $\bigcup \mathcal{B} = X$；
2. 对 $B_1, B_2 \in \mathcal{B}$ 与 $x \in B_1 \cap B_2$，存在 $B_3 \in \mathcal{B}$ 使 $x \in B_3 \subseteq B_1 \cap B_2$。

$\mathcal{S} \subseteq \mathcal{P}(X)$ 是**子基**，当且仅当它的**有限交**全体构成一组基。

⭐ 基的用处：**只需在基上验证，就自动对一切开集成立**。
- 距离空间里：开球全体构成一组基；
- $\mathbb{R}$ 上：开区间构成一组基；半开区间 $\{ (a, b] \}$ 也是（这一条在构造 Lebesgue–Stieltjes 测度时更好用）；
- 积拓扑、$\sigma$-代数的「柱集」也是同一套路：先定一组好用的集合，再取它生成的东西。

⚠ 基不是唯一的：同一个拓扑可以有很多组基。

参考：Munkres, Topology, Ch. 2

#### 连续映射　`def.continuous-map`
*定义*　连续映射（Continuous Map）

设 $X$、$Y$ 是拓扑空间。映射 $f : X \to Y$ **连续**，当且仅当**每个开集的原像是开集**：

$$V \in \mathcal{T}_Y \implies f^{-1}(V) \in \mathcal{T}_X$$

只需对某一组**基**（或子基）验证即可。

连续的复合仍连续：$f$、$g$ 连续 $\implies g \circ f$ 连续。

⭐ 这条定义是 $\varepsilon$-$\delta$ 的**抽象化**：在距离空间里，「$f^{-1}(V)$ 开」与「$\varepsilon$ 给出 $\delta$」逐字等价 —— 因为开球就是 $\varepsilon$ 邻域。所以「连续」是拓扑性质，跟具体距离无关。

⚠ 用**原像**而不是像：原像对并、交、补全部保持，像没有这些性质。这与可测函数的定义（$f^{-1}(E) \in \mathcal{M}$）是同一个套路。

参考：Munkres, Topology, Ch. 2

#### 同胚　`def.homeomorphism`
*定义*　同胚（Homeomorphism）

设 $X$、$Y$ 是拓扑空间。$f : X \to Y$ 是**同胚**，当且仅当

- $f$ 是双射；
- $f$ 与 $f^{-1}$ 都连续。

此时记 $X \cong Y$，称两个空间**同胚**。「同胚」是拓扑空间之间的等价关系（恒等、逆、复合都保持）。

⭐ 同胚 = 「拓扑上分不出来」：一切**拓扑性质**（紧性、连通性、Hausdorff、闭包）都保持不变。

⚠ 反过来也要当心：**度量性质在同胚下会变**。$\mathbb{R}$ 与开区间 $(0, 1)$ 同胚（$x \mapsto \frac{1}{2} + \frac{1}{\pi}\arctan x$），但前者完备、后者不完备 —— 这就是「完备性不是拓扑性质」的经典例子，也是距离空间里「紧 / 闭」与「完备 / 全有界」两类性质的分界线。

参考：Munkres, Topology, Ch. 2

### 星团：度量空间
> 造出「用距离算出来的拓扑」：完备、全有界、列紧，以及紧性的几种等价刻画。

#### 距离空间　`def.metric-space`
*定义*　距离空间 / 度量空间（Metric Space）

**距离空间**是一对 (X, d)：$X$ 是集合，$d : X \times X \to [0, +\infty )$ 是 $X$ 上的**距离**，满足

- **非退化**：$d(x, y) = 0 \iff x = y$
- **对称**：$d(x, y) = d(y, x)$
- **三角不等式**：$d(x, z) \le d(x, y) + d(y, z)$

由 $d$ 定义**开球** $B(x, r) = \{ y \in X : d(x, y) < r \}$，并规定 $U \subseteq X$ 是开集 $\iff U$ 是若干开球之并。这样 $X$ 上就有了一个拓扑。

给定 $\varepsilon > 0$，称 $D \subseteq X$ 是一个 **$\varepsilon$网**，若 $\forall x \in X, \exists y \in D : d(x, y) < \varepsilon$

开球全体构成这个拓扑的一组**基**。度量空间自动是第一可数、正规（因而 Hausdorff）的。

下面几条性质分两类：**紧性 / 闭**只依赖开集，是**拓扑**性质；**完备 / 全有界**要用到 $d$，是**度量**性质。这条分界线是整段的重点。

⚠ 完备性**不是**拓扑性质：$\mathbb{R}$ 与开区间 (0, 1) 同胚，前者完备、后者不完备。

参考：Rudin, Principles of Mathematical Analysis, Ch. 2；Munkres, Topology, §20

#### 完备　`def.complete`
*定义*　完备距离空间（Complete Metric Space）

序列 $\{x_{n}\}$ 是 **Cauchy 列**，当且仅当

$$\forall\varepsilon > 0, \exists N : m, n \ge N \implies d(x_m, x_n) < \varepsilon$$

距离空间 (X, d) **完备**，当且仅当 $X$ 中每个 Cauchy 列都在 $X$ 中收敛：

$$\{x_n\}\text{ 是} Cauchy\text{ 列} \implies \exists x \in X : x_n \to x$$

「收敛 $\implies Cauchy$」永远成立；**「$Cauchy \implies$ 收敛」才是完备性的内容**。

例子：$\mathbb{R}^{n}$、$\mathbb{C}^{n}$、任何 Banach 空间都完备；$\mathbb{Q}$ 不完备（3, 3.1, 3.14, …, 一个收敛到 $\sqrt 2$ 的 Cauchy 列在 $\mathbb{Q}$ 中不收敛）。

**闭子集继承完备**：$X$ 完备时，$A \subseteq X$ 作为子空间完备 $\iff A$ 在 $X$ 中闭。这条在下面「子集的紧性刻画」里要用。

参考：Rudin, Principles of Mathematical Analysis, Ch. 3

#### 全有界　`def.totally-bounded`
*定义*　全有界 / 预紧（Totally Bounded）

距离空间 (X, d) **全有界**（也叫**预紧**），当且仅当对每个 $\varepsilon > 0$ 都存在**有限的 $\varepsilon$网**：

$$\forall\varepsilon > 0, \exists n\text{ 与} x_1, \ldots , x_n \in X : X = \bigcup_{i=1}^{n} B(x_i, \varepsilon)$$

等价说法：对每个 $\varepsilon > 0$，$X$ 都能被**有限个**半径 $\varepsilon$ 的开球盖住。

关键词是**有限**。它只要求「存在」一组有限的球，不要求你写得出来。

**全有界 $\implies$ 有界**（取 $\varepsilon = 1$，$X$ 就被有限个单位球盖住），但反之不然：无限维 Banach 空间的单位球有界而不全有界。

全有界被**一致连续**映射保持，但不被连续映射保持 —— 又一次说明它是度量性质而非拓扑性质。

参考：Munkres, Topology, §43

#### 列紧　`def.sequentially-compact`
*定义*　列紧 / 序列紧（Sequentially Compact）

距离空间 (X, d) **列紧**（序列紧），当且仅当 $X$ 中每个序列都有收敛到 $X$ 中的子列：

$$\forall\{x_n\} \subseteq X, \exists\{x_{n_k}\}\text{ 与} \exists x \in X : x_{n_k} \to x$$

在度量空间里「列紧 $\iff$ 紧」（见下面的箭头），但在一般拓扑空间里**不等价** —— 列紧严格更强。度量空间好用的地方正是这里。$n$$n$注意子列收敛到的是 $X$ 中的点：列紧是内蕴性质，不看外面那个空间。

参考：Munkres, Topology, §28

#### 紧　`def.compact`
*定义*　紧空间（Compact Space）

距离空间 (X, d) **紧**，当且仅当 $X$ 的每个**开覆盖**都有有限子覆盖：

$$\forall\{U_i\}_{i \in I} (\text{ 每个} U_i\text{ 开且} X = \bigcup_{i \in I} U_i ) \implies \exists i_1, \ldots , i_n : X = \bigcup_{k=1}^{n} U_{i_k}$$

紧性是**拓扑**性质，只依赖开集，跟 $d$ 的具体取值无关。

例子：$\mathbb{R}$ 中的闭区间 [a, b] 紧（Heine–Borel）；$\mathbb{R}$ 本身不紧（{(-n, n)} 没有有限子覆盖）；(0, 1] 不紧。

紧性的一个常用等价形式：**有限交性质** —— 若一族闭集的任意有限子族都有交，则整族的交非空。

参考：Munkres, Topology, §26

#### 紧的三个等价刻画　`thm.metric-compact-equiv`
*定理*　度量空间中：紧 $\iff$ 列紧 $\iff$ 完备 + 全有界

设 (X, d) 是距离空间。则下列三条**彼此等价**：

$$X\text{ 紧} \iff X\text{ 列紧} \iff X\text{ 完备且全有界}$$

逻辑骨架全在箭头里（点箭头看证明）：



- 紧 $\implies$ 列紧

- 列紧 $\implies$ 全有界　（整段里**唯一**实质用到选择原理的一步，用的是 DC）

- 列紧 $\implies$ 完备

- 列紧 $\implies$ 紧　（「坏球」法，只用到全有界，不动选择公理）

- 紧 $\implies$ 完备、紧 $\implies$ 全有界

- 完备 + 全有界 $\implies$ 列紧　（对角线法，也不动选择公理）



于是「列紧 $\implies$ 全有界 $\implies$ 紧」与「紧 $\implies$ 列紧」闭合，三个概念打通。

⚠ 在一般拓扑空间里只有「紧 $\implies$ 列紧」成立、**反向不成立** —— 列紧是度量空间特有的好运气。

参考：Munkres, Topology, §28 与 §43

#### 紧子集是闭的　`prop.compact-subset-closed`
*命题*　命题：紧子集在 X 中是闭集

设 $A$ 是距离空间 $X$ 的子集（按子空间度量）。则

$$A\text{ 紧} \implies A\text{ 是} X\text{ 中的闭集}$$

其实只要 $X$ 是 Hausdorff 空间，紧子集就是闭的；距离空间自然 Hausdorff。

把它和「$X$ 完备」放在一起，正是为了下面那条**子集**的紧性刻画做准备：那条要用「$A$ 紧 $\implies A$ 闭」和「$A$ 闭 $X$ 完备 $\implies A$ 完备」。

参考：Munkres, Topology, §26

#### 子集的紧性刻画　`prop.subset-compact-equiv`
*命题*　命题：X 完备时，A 紧 $\iff A$ 闭且全有界

设 (X, d) 是**完备**的距离空间，$A \subseteq X$。则

$$A\text{ 紧} \iff A\text{ 闭}\text{ 且} A\text{ 全有界}$$

（「$A$ 全有界」按子空间度量 d|A 理解。）

⚠ **「$X$ 完备」这个前提不能省。** 理由是中间那一步：$A$ 作为子空间完备 $\iff A$ 在 $X$ 中闭 —— 这一步要用 $X$ 完备。少了它，$A$ 闭 $A$ 全有界推不出 $A$ 紧。

这也是 **Heine–Borel** 的推广：$\mathbb{R}^{n}$ 完备，而在 $\mathbb{R}^{n}$ 中 $A$ 有界 $\iff A$ 全有界，于是「有界闭集紧」正是它的特例。

参考：Munkres, Topology, §28；Rudin, Principles of Mathematical Analysis, Ch. 2

## 星系：抽象代数（Abstract Algebra）
> 群、环、域、模与线性代数；佐恩引理的经典应用场。

### 星团：代数结构
> 造出代数语言本身：**域** = 集合 + 两个运算 + 公理，**有序域** = 域 + 与运算相容的全序。ℚ 与 ℝ 都是实例。（代数学的笔记进来后这一团扩容：群 / 环 / 模。）

#### 域　`def.field`
*定义*　域 $F$（Field）

设 $F$ 是一个**集合**，$+$ 与 $\cdot$ 是 $F$ 上的两个**二元运算**（即两个函数 $F \times F \to F$）。称 $(F, +, \cdot)$ 是一个**域**，当且仅当：

- **加法**：$a + (b + c) = (a + b) + c$，$a + b = b + a$；存在 $0 \in F$ 使 $a + 0 = a$；对每个 $a$ 存在 $-a \in F$ 使 $a + (-a) = 0$；
- **乘法**：$a(bc) = (ab)c$，$ab = ba$；存在 $1 \in F$，$1 \ne 0$，使 $a \cdot 1 = a$；对每个 $a \ne 0$ 存在 $a^{-1} \in F$ 使 $a\, a^{-1} = 1$；
- **分配律**：$a (b + c) = ab + ac$。

一句话：**加减乘除（除以非零元）都封闭，且满足结合、交换、分配律**。

⭐ **格式是「集合 + 运算 + 公理」**：域不是凭空的对象 —— 一个集合、两个函数、几条等式就定出了一个域。判别一个东西是不是域，就是逐条核对这些等式。

已经造好的例子：
- $\mathbb{Q}$（有理数）：最顺手的域；
- $\mathbb{R}$（实数）：由 Cauchy 列造出来之后，再验证它满足这些等式（见「$\mathbb{R}$ 是完备有序域」）；
- $\mathbb{Z}$ **不是**域：$2$ 在里面没有乘法逆元；$\mathbb{N}$ 也不是：$1 - 2$ 没有意义。

⚠ 「域」（field）与测度论里的「环」不是一回事：那里的环是**集合环**，指对有限并与差封闭的**集族**，同名不同物。

参考：Lang, Algebra, Ch. I；Dummit & Foote, Abstract Algebra, §13.1

#### 有序域　`def.ordered-field`
*定义*　有序域（Ordered Field）

设 $(F, +, \cdot)$ 是**域**，$\le$ 是 $F$ 上的**全序**（偏序，且任意两元可比）。若 $\le$ 与两个运算**相容**：

$$a \le b \implies a + c \le b + c, \qquad a \le b,\ 0 \le c \implies ac \le bc$$

则称 $(F, +, \cdot, \le)$ 是一个**有序域**。照搬 $\mathbb{Q}$ 上的说法：$a > 0$ 叫**正元**，$a < 0$ 叫**负元**；两者拼起来就是绝对值

$$|a| := \begin{cases} a, & a \ge 0 \\ -a, & a < 0 \end{cases}$$

⭐ 第二条相容性只在 $0 \le c$ 时允许「两边同乘」—— 乘**负数**要**反向**（$a \le b,\ c \le 0 \implies ac \ge bc$，由前两条推出）。有理数、实数上关于不等式的全部运算规则，归根到底就是这一条。

由两条相容性立刻得到：**平方元非负**（$a \ge 0 \implies a^2 \ge 0$；$a \le 0 \implies -a \ge 0$ 且 $a^2 = (-a)^2 \ge 0$），特别地 $1 = 1^2 > 0$，故 $-1 < 0$。

📌 **「完备」不是这条定义的一部分**，它是在有序域上再加一条：**每个非空有上界的子集都有上确界**。$\mathbb{Q}$ 就是「有序但完备不了」的例子 —— $\{q \in \mathbb{Q} : q^2 < 2\}$ 有上界却没有上确界。

参考：Lang, Algebra, Ch. VI；Rudin, Principles of Mathematical Analysis, Ch. 1

### 星团：向量空间的基
> 造出线性代数的地基：每个向量空间都有基。

#### 向量空间的基　`def.vs`
*定义*　向量空间 / 线性无关 / 基

设 $K$ 是域，$V$ 是 $K$ 上的向量空间，$S \subseteq V$。

- **$S$ 线性无关**：$S$ 的每个有限子集都线性无关，即不存在不全为零的 $c_{1}$…$c_{n} \in K$ 使 $c_{1}v_{1} + \cdots + c_{n}v_{n} = 0$。
- **$S$ 生成 $V$**：$V$ 中每个向量都是 $S$ 中有限多个向量的线性组合。
- **$S$ 是 $V$ 的基**：$S$ 既线性无关又生成 $V$。

注意线性无关性是**逐有限子集**定义的性质——这正是它「具有有限特征」的原因。

等价说法：$S$ 是基 $\iff V$ 中每个向量都能唯一地写成 $S$ 的有限线性组合。

参考：Lang, Linear Algebra

#### 每个向量空间有基　`thm.vsbasis`
*定理*　每个向量空间都有基（Zorn 引理的经典应用）

设 $V$ 是域 $K$ 上的向量空间。则

$V$ 有基；
- 更精确地：$V$ 的任一线性无关子集都能扩充成 $V$ 的一个基，任一生成集都含有一个基。

在 ZF 中此命题与 AC 等价——去掉 AC，可以构造出没有基的向量空间。

这是「序理论的结论在代数里落地」的标准范例，也是本星图上跨板块连线的一个实例。

参考：Lang, Linear Algebra；Brunner, The Axiom of Choice in Topology

## 星系：分析学（Analysis）
> 极限、测度、泛函分析；Hahn–Banach 等定理也依赖选择原理。

### 星团：实数与极限
> 在造好的 ℝ 上搭起分析的语言：区间 → 数列极限与级数 → 连续 → 导数。**确界原理**（ℝ 是完备有序域）也在这里 —— 它是分析学的引擎。（ℝ 与 ℂ 本身的构造在「数系的构造」里。）

#### 扩充实数 [−∞,+∞]　`def.extended-real`
*定义*　扩充实数系 $\overline{\mathbb{R}}$（Extended Reals）

在 $\mathbb{R}$ 上添两个记号 $+\infty$、$-\infty$，得到**扩充实数系**

$$\overline{\mathbb{R}} := \mathbb{R} \cup \{ -\infty, +\infty \}$$

规定 $-\infty < x < +\infty$ 对一切 $x \in \mathbb{R}$ 成立，于是 $\overline{\mathbb{R}}$ 仍是全序集；并约定

$$x + (\pm\infty) = \pm\infty, \qquad 0 \cdot (\pm\infty) = 0$$

而 $\infty - \infty$ 与 $\infty / \infty$ **不定义**。

为什么需要它：测度、积分的取值天然可以是 $\infty$（$\mathbb{R}$ 的 Lebesgue 测度就是 $\infty$），把所有量都放进 $\overline{\mathbb{R}}$，收敛定理（sup、极限）就不必反复讨论「值是不是有限」。

⚠ 约定 $0 \cdot \infty = 0$ 是刻意的：它让「在无穷测度集上取 $0$ 的函数」积分为 $0$。
⚠ 它不是域：$\infty$ 没有加法逆元。

参考：Rudin, Principles of Mathematical Analysis, Ch. 1

#### 区间　`def.interval`
*定义*　区间（Interval）

$\mathbb{R}$ 的**区间**是满足下式的子集 $I$：

$$a, b \in I,\ a \le x \le b \implies x \in I$$

即「中间不空」。常见的有界区间写成

$$(a, b), \quad [a, b], \quad [a, b), \quad (a, b]$$

按端点是否取到区分；另有 $(-\infty, b)$、$(a, +\infty)$、$\mathbb{R}$ 等无界区间，以及单点集 $[a, a]$。

体积就是长度：$m((a, b]) = b - a$。

⭐ **半开区间 $\{ (a, b] : a < b \}$ 是构造 Lebesgue–Stieltjes 测度时的起点**：它本身只是一个基本类，做有限不交并就得到环，长度在那个环上已经是预测度。

为什么要用半开而不是开区间：不交并的长度好算 —— $[a, b) \sqcup [b, c) = [a, c)$ 在开区间上不成立。

参考：Rudin, Principles of Mathematical Analysis, Ch. 2

#### 数列极限　`def.sequence-limit`
*定义*　数列极限 $x_n \to x$（Limit of a Sequence）

数列 $\{x_n\} \subseteq \mathbb{R}$ **收敛到** $x$（记 $x_n \to x$ 或 $\lim_{n \to \infty} x_n = x$），当且仅当

$$\forall \varepsilon > 0, \exists N, \forall n \ge N : |x_n - x| < \varepsilon$$

即：不管给出多小的 $\varepsilon$，从某一项之后，所有项都落在 $x$ 的 $\varepsilon$ 邻域里。

不收敛的数列叫**发散**。

⭐ 这就是「$\varepsilon$-$N$ 语言」：把「越来越近」翻译成可以逐条检验的条件。整个分析学的证明都建立在这个格式上。

基本性质（都由定义直接验证）：
- 极限**唯一**；
- 收敛数列**有界**；
- 四则运算与极限可交换（分母极限非零时）。

⚠ 「有界」不保证收敛（$(-1)^n$）；「$\varepsilon$ 固定、$N$ 往后」的顺序不能换。

参考：Rudin, Principles of Mathematical Analysis, Ch. 3

#### 级数收敛　`def.series`
*定义*　级数 $\sum a_n$（Series）

给定数列 $\{a_n\}$，令**部分和** $s_N := \sum_{n=1}^{N} a_n$。

称级数 $\sum_{n=1}^{\infty} a_n$ **收敛**，当且仅当部分和数列 $\{s_N\}$ 收敛，此时记

$$\sum_{n=1}^{\infty} a_n := \lim_{N \to \infty} s_N$$

**非负项级数**（$a_n \ge 0$）特别干净：部分和递增，于是

$$\sum_{n=1}^{\infty} a_n = \sup_N s_N \in [0, +\infty]$$

一定有意义（可能是 $+\infty$）。

⭐ 测度的**可数可加**、积分的**逐项**性质，用的都是非负项级数这一行：非负就不必担心条件收敛与重排。

⚠ 收敛级数**可以重排**的只有绝对收敛的情形；条件收敛的级数重排后可能收敛到别的值（Riemann 重排定理）。

参考：Rudin, Principles of Mathematical Analysis, Ch. 3

#### 连续　`def.continuous`
*定义*　连续（Continuity）

$f : \mathbb{R} \to \mathbb{R}$ 在 $x_0$ **连续**，当且仅当

$$\forall \varepsilon > 0, \exists \delta > 0 : |x - x_0| < \delta \implies |f(x) - f(x_0)| < \varepsilon$$

等价说法：$\lim_{x \to x_0} f(x) = f(x_0)$（极限存在且等于函数值）。

$f$ **连续**（在 $\mathbb{R}$ 上连续）当且仅当它在每一点连续。

**一致连续**是更强的要求：$\delta$ 只依赖 $\varepsilon$，不依赖 $x_0$。

⭐ 把 $|x - x_0| < \delta$、$|f(x) - f(x_0)| < \varepsilon$ 换成距离 $d$，这个定义原封不动地搬到距离空间 —— 这也正是距离空间的定义为什么长成那样。

⚠ **连续 $\ne$ 一致连续**：$f(x) = x^2$ 在 $\mathbb{R}$ 上连续但不一致连续（$x$ 越大需要的 $\delta$ 越小）。紧区间上两者才重合。

参考：Rudin, Principles of Mathematical Analysis, Ch. 4

#### 导数　`def.derivative`
*定义*　导数 $F'$（Derivative）

$F : (a, b) \to \mathbb{C}$ 在 $x_0 \in (a, b)$ **可导**，当且仅当极限

$$F'(x_0) := \lim_{h \to 0} \frac{F(x_0 + h) - F(x_0)}{h}$$

存在（有限）。这个数叫 $F$ 在 $x_0$ 的**导数**。

在 $(a, b)$ 上处处可导，就得到一个函数 $F'$；称 $F$ **可导**。

若不要求极限存在而允许 $\pm\infty$，得到的是**广义导数**，单调函数的导数理论要用它。

⭐ 微分理论关心的是**逐点**行为，所以定义域常常收缩到 $L^1_{loc}$ 而不是 $L^1$。

要点（本星图 BV / AC 那一段全靠它们）：
- 可导 $\implies$ 连续，反之不成立（$|x|$ 在 $0$ 处）。
- 单调函数**几乎处处可导**，且 $F' \ge 0$ a.e.。
- 可导**不保证** $F(b) - F(a) = \int_a^b F'$（Cantor 函数就是反例）；等式成立要加绝对连续。

参考：Rudin, Principles of Mathematical Analysis, Ch. 5

#### ℝ 是完备有序域　`thm.real-ordered-field`
*定理*　$\mathbb{R}$ 是完备有序域（确界原理）

上面构造出来的 $(\mathbb{R}, +, \cdot, \le)$ 满足三组性质：

**(i) 域公理**：$(\mathbb{R}, +, \cdot)$ 是域 —— 加减乘除（除以非零元）都封闭，且有结合、交换、分配律；

**(ii) 序公理**：$\le$ 是全序，且与运算相容：
$$a \le b \implies a + c \le b + c, \qquad a \le b,\ 0 \le c \implies ac \le bc$$

**(iii) 完备性（确界原理）**：$\mathbb{R}$ 的**每个非空有上界的子集都有上确界**。

此外 $\mathbb{Q}$ 的嵌入像在 $\mathbb{R}$ 中**稠密**。

⚠ **注意这一条的位置**：它是**定理**，不是定义 —— 先有构造（「实数系 $\mathbb{R}$」），再证明造出来的东西满足这三组性质。

⭐ **第 (iii) 条才是分析学的引擎**：没有它 $\mathbb{Q}$ 也满足前两条，但 $\{ x \in \mathbb{Q} : x^2 < 2 \}$ 在 $\mathbb{Q}$ 里没有上确界。（$\mathbb{Q}$ 因此不是完备有序域 —— 这不是缺陷，而正是要把 $\mathbb{Q}$ 补成 $\mathbb{R}$ 的理由。）

由 (iii) 推出分析里最常用的两件事：
- **单调有界数列收敛**；
- **闭区间套定理**、**Bolzano–Weierstrass**、**Cauchy 列收敛**。

⚠ 完备性说的是「**上确界存在**」，不是「极限一定存在」—— 后者是它的推论。

📌 (iii) 的走法分两步（见边的证明）：先证**「$\mathbb{R}$ 里每个 Cauchy 列都收敛」**（用对角线法从代表元里抽出一个有理 Cauchy 列），再由 Cauchy 完备推出确界原理（二分法造递增列与递减上界列，夹逼到同一个极限）。

📌 由这三条推出来的、后面到处要用的性质：**阿基米德性质**与 **$\mathbb{Q}$ 在 $\mathbb{R}$ 中稠密**（见「阿基米德性质」）；$\mathbb{R}$ 还**不可数**（$|\mathbb{R}| = 2^{\aleph_0}$）—— 「稠密」与「一样多」是两件事。

参考：Rudin, Principles of Mathematical Analysis, Ch. 1；Ch. 3

### 星团：集合族与 σ-代数
> 造出「能承载测度的集合族」：环 → σ-环 → σ-代数 → 生成、Borel、单调类判据。测度本身在下一个团里。

#### 基本类　`def.fundamental-class`
*定义*　基本类（Fundamental Class）

设 $X$ 是集合，$\mathfrak{A} \subseteq \mathcal{P}(X)$。$\mathfrak{A}$ 是 $X$ 上的一个**基本类**，当且仅当

- 对**交**封闭：$A, B \in \mathfrak{A} \implies A \cap B \in \mathfrak{A}$
- 差可以拆开：$A, B \in \mathfrak{A} \implies A \setminus B\text{ 是} \mathfrak{A}\text{ 中有限多个两两不交集合之并}$

它比「环」弱一档：只要求对**交**封闭（不是并），而差只要求「能拆成不交并」。

基本类的作用是当**砖块**：把它的元素做成有限不交并，就得到一个环 —— 这正是下面那条性质 (5)。

典型例子：半开区间族 $\{ (a, b] : a < b \}$ 是 $\mathbb{R}$ 上的基本类；由它做有限不交并得到的，正是构造 Lebesgue–Stieltjes 测度时要用的那个代数。

参考：Halmos, Measure Theory, §4

#### 环与代数　`def.set-ring`
*定义*　环与代数（Ring, Algebra）

设 $\mathfrak{A} \subseteq \mathcal{P}(X)$ 是 $X$ 的一族子集。

$\mathfrak{A}$ 是**环**（ring），当且仅当它对有限并封闭、且对差封闭：

$$A, B \in \mathfrak{A} \implies A \cup B \in \mathfrak{A}, \quad A \setminus B \in \mathfrak{A}$$

$\mathfrak{A}$ 是**代数**（algebra），当且仅当 $\mathfrak{A}$ 是环、且含全集：

$$X \in \mathfrak{A}$$

**代数 $=$ 环 $X \in \mathfrak{A}$**。「把整个 $X$ 放进去」是唯一的差别。

环加上 $X \in \mathfrak{A}$ 之后，差就自动升级成补：$A^c = X \setminus A \in \mathfrak{A}$。所以**代数**也等价于「对有限并、对补封闭」。

⚠ 这里的「环」是**集合环**（ring of sets），和抽象代数里的 ring 只是同名，毫无关系。

把「有限」都升级成「可数」，就得到 **$\sigma$环** 与 **$\sigma$代数** —— 另开两条节点写。

参考：Halmos, Measure Theory, §4；Folland, Real Analysis, §1.2

#### σ-环　`def.sigma-ring`
*定义*　σ-环（σ-Ring）

$\mathfrak{A} \subseteq \mathcal{P}(X)$ 是 $X$ 上的一个 **$\sigma$环**，当且仅当把「有限」都换成「可数」之后仍封闭：

- 对**可数并**封闭：$A_1, A_2, \ldots \in \mathfrak{A} \implies \bigcup_{n=1}^{\infty} A_n \in \mathfrak{A}$
- 对**差**封闭：$A, B \in \mathfrak{A} \implies A \setminus B \in \mathfrak{A}$

**$\sigma$环 $=$ 环 + 可数并**。它**不要求**含 $X$ —— 这正是它与 $\sigma$代数的唯一差别。

不含 $X$ 的后果是实质的：$\sigma$环里集合的并可能仍是一个真子集，补运算也落不到里面。

典型例子：$X = \mathbb{R}$ 上「全体可数集」是 $\sigma$环，不是 $\sigma$代数 —— 它的元素之并（如 $\mathbb{R} \setminus \mathbb{Q}$）不在里面。

由差 + 可数并，**可数交**自动可用：$\bigcap_n A_n = A_1 \setminus \bigcup_{n \ge 2} (A_1 \setminus A_n)$。

与单调类的关系：**环是 $\sigma$环 $\iff$ 它是单调类 $\iff$ 它对可数不交并封闭**。

参考：Halmos, Measure Theory, §4

#### σ-代数　`def.sigma-algebra`
*定义*　σ-代数（σ-Algebra）

设 $X$ 是集合，$\mathfrak{A} \subseteq \mathcal{P}(X)$。$\mathfrak{A}$ 是 $X$ 上的一个 **$\sigma$代数**，当且仅当它同时满足三条：

1. **含全集**：$X \in \mathfrak{A}$
2. **对补封闭**：$A \in \mathfrak{A} \implies A^c := X \setminus A \in \mathfrak{A}$
3. **对可数并封闭**：$A_1, A_2, \ldots \in \mathfrak{A} \implies \bigcup_{n=1}^{\infty} A_n \in \mathfrak{A}$

二元组 $(X, \mathfrak{A})$ 称为**可测空间**（measurable space），$\mathfrak{A}$ 的元素称为**可测集**（measurable set）。

三条是配套的，缺一不可：只留 (2)(3) 就是**$\sigma$环**；把 (3) 降成「有限并」就是**代数**。

由 (2)(3) 用 De Morgan 立得对**可数交**封闭：$\Big( \bigcap_n A_n \Big)^c = \bigcup_n A_n^c \in \mathfrak{A}$。于是有限并、有限交、差、对称差全都可用 —— 真正超出「代数」的，只有**可数**这一件事。

⚠ 方向不能反：$\sigma$代数一定是代数，代数不一定是 $\sigma$代数。反例：$X = \mathbb{R}$ 上「有限集与余有限集」全体是代数，而 $\mathbb{N} = \{1\} \cup \{2\} \cup \{3\} \cup \cdots$ 是其中可数多个元素的并、本身既非有限也非余有限，所以那个代数不封闭于可数并。

记号里的「$\sigma$」表示**可数**（取自德文 Summe / 法文 somme 的首字母），和标准差那个 $\sigma$ 无关。

为什么非要有它：测度的可数可加性 $\mu (\bigcup A_{n}) = \sum \mu (A_{n})$ 需要一个对**可数**运算封闭的定义域，否则等式两边根本不在同一个集合族里。整条测度构造就是从这里起步的。

参考：Halmos, Measure Theory, §4；Folland, Real Analysis, §1.2；Rudin, Real and Complex Analysis, Ch. 1

#### 单调类　`def.monotone-class`
*定义*　单调类（Monotone Class）

$\mathfrak{A} \subseteq \mathcal{P}(X)$ 是**单调类**，当且仅当它对两种单调极限都封闭：

$$\{E_j\}_{j=1}^{\infty} \nearrow  \implies \bigcup_{j=1}^{\infty} E_j \in \mathfrak{A}$$
$$\{E_j\}_{j=1}^{\infty} \searrow  \implies \bigcap_{j=1}^{\infty} E_j \in \mathfrak{A}$$

单调类只关心「递增取并、递减取交」这两种极限，**不**要求对有限并、差、补封闭 —— 所以它比 $\sigma$代数弱得多。

它的用处全在单调类定理：一个 $\sigma$代数等价于「一个对两种极限都封闭的环」。证明「某性质对所有可测集成立」时，通常先验证它在一个单调类上成立，再交给单调类定理。

参考：Halmos, Measure Theory, §6

#### 集合族的基本性质　`prop.set-class-properties`
*命题*　命题：基本类 / 环 / σ-代数的几条基本性质

(1) 基本类包含 $\emptyset$。

(2) 代数与 $\sigma$代数对**有限交**、**可数交**封闭。

$(3) \mathfrak{A}$ 是 $\sigma$代数 $\iff \mathfrak{A}$ 对**可数并**与**取补**都封闭。

(5) 若 $\mathcal{E}$ 是**基本类**，则

$$\mathfrak{A} = \{ \mathcal{E}\text{ 中有限多个两两不交集合之并} \}$$

是一个**环**。

（第 (4) 条因为本身是一条定理，单独列在「环 $\implies \sigma$环 的判据」里。）

(1)：取 $A \in \mathfrak{A}$，则 $A \setminus A = \emptyset$ 要能被拆成不交并，只能是空并。

(2)：有限交直接由 De Morgan；可数交由 (3) 的补 + 可数并得到。若 $\mathfrak{A}$ 只是环而不含 $X$，「补」要小心，通常用 **$A \setminus \bigcup B_{j}$** 这种相对补。

(5)：这是把基本类升级成环的标准操作 —— 先做不交并保证「差」好算，再验证有限并仍是有限不交并。

这几条性质的实际用途：**验证一个族是 $\sigma$代数时，只需查「含 $X$」「对补」「对可数并」三条**，其余全部免费。

参考：Halmos, Measure Theory, §4

#### 环 → σ-环 的判据　`thm.ring-monotone-sigma`
*定理*　定理：环是 σ-环 $\iff$ 它是单调类 $\iff$ 它对可数不交并封闭

设 $\mathfrak{A}$ 是一个**环**。则下列三条等价：

$$\mathfrak{A}\text{ 是} \sigma-\text{环} \iff \mathfrak{A}\text{ 是单调类} \iff \mathfrak{A}\text{ 对可列不交并封闭}$$

注意前提「$\mathfrak{A}$ 是环」不可省 —— 单调类一般不封闭于有限并，所以单调类本身推不出 $\sigma$环。

这条定理是单调类定理的技术核心：正是因为它，才能把「对 $\sigma$代数成立」化归为「先验证一个环，再看单调极限」。

参考：Halmos, Measure Theory, §6

#### 生成的 σ-代数　`def.generated-sigma`
*定义*　由 $\mathcal{E}$ 生成的 σ-代数 / 单调类：$\mathcal{M}(\mathcal{E})$ 与 $\mathfrak{m}(\mathcal{E})$

设 $\mathcal{E} \subseteq \mathcal{P}(X)$。定义

$$\mathcal{M}(\mathcal{E}) := \bigcap \{ \mathfrak{A} : \mathfrak{A}\text{ 是包含} \mathcal{E}\text{ 的} \sigma-\text{代数} \}$$
$$\mathfrak{m}(\mathcal{E}) := \bigcap \{ \mathfrak{A} : \mathfrak{A}\text{ 是包含} \mathcal{E}\text{ 的单调类} \}$$

$\mathcal{M}(\mathcal{E})$ 称为**由 $\mathcal{E}$ 生成的 $\sigma$代数**，$\mathfrak{m}(\mathcal{E})$ 称为由 $\mathcal{E}$ 生成的单调类。

为什么这样定义是合法的：这个交非空（$\mathcal{P}(X)$ 总是一个含 $\mathcal{E}$ 的 $\sigma$代数），而且**任意多个 $\sigma$代数之交仍是 $\sigma$代数**（单调类也一样），所以交出来的是最小的那一个。

「生成」是整段里最常用的手法：你给我一族好用的集合（基本类、开集、柱集），我把它补成最小的 $\sigma$代数，再在上面做测度。Borel、积 $\sigma$代数都是这么来的。

参考：Halmos, Measure Theory, §6；Folland, Real Analysis, §1.2

#### 单调类定理　`thm.monotone-class`
*定理*　单调类定理（Monotone Class Theorem）

设 $\mathcal{E} \subseteq \mathcal{P}(X)$。则

$$\mathcal{M}(\mathcal{E}) = \mathfrak{m}(\mathcal{E}) \iff \forall A \in \mathcal{E} : A^c \in \mathfrak{m}(\mathcal{E})\text{ 且} \forall A, B \in \mathcal{E} : A \cup B \in \mathfrak{m}(\mathcal{E})$$

**这一条是「标准版 + 加强版」合起来的那一个版本。**

**标准版**（Halmos §6 / Folland 2.37）：$\mathcal{A}$ 是**代数** $\implies \mathfrak{m}(\mathcal{A}) = \mathcal{M}(\mathcal{A})$。

上面陈述的是**加强版**：把「$\mathcal{E}$ 是代数」换成两条更弱的条件——$\mathcal{E}$ 中集合的**补**与**并**落进 $\mathfrak{m}(\mathcal{E})$ 就行。证明仍是单调类定理那三步：

**①** 令 $\mathcal{K}_{1} = \{A \in \mathfrak{m} : A^{c} \in \mathfrak{m}\}$。它含 $\mathcal{E}$（第一条条件），且本身是单调类（$\mathfrak{m}$ 单调 $\implies$ 极限仍在 $\mathfrak{m}$；补用一次递减极限）$\implies \mathcal{K}_{1} = \mathfrak{m}$，即 $\mathfrak{m}$ 对**补**封闭。

**②** 固定 $A \in \mathcal{E}$，令 $\mathcal{K}_{2} = \{B \in \mathfrak{m} : A \cup B \in \mathfrak{m}\}$。由第二条条件 $\mathcal{K}_{2} \supseteq \mathcal{E} \implies \mathcal{K}_{2} = \mathfrak{m}$。

**③** 固定 $B \in \mathfrak{m}$，令 $\mathcal{K}_{3} = \{A \in \mathfrak{m} : A \cup B \in \mathfrak{m}\}$。由 ② 知 $\mathcal{K}_{3} \supseteq \mathcal{E} \implies \mathcal{K}_{3} = \mathfrak{m}$，即 $\mathfrak{m}$ 对**并**封闭。

于是 $\mathfrak{m}$ 对 $\cup$ 与补封闭、又是单调类 $\implies \mathfrak{m}$ 是一个 $\sigma$代数 $\implies \mathcal{M}(\mathcal{E}) \subseteq \mathfrak{m}(\mathcal{E})$；反向恒成立，两边相等。（需 $\mathcal{E} \ne \emptyset$，否则 $\mathfrak{m}(\mathcal{E}) = \{\emptyset \}$。）

⚠ 把 $\cup$ 换成 $\cap$ 或 $\setminus$ 结论同样成立 —— 有了补封闭，几种封闭性互相推得出来，所以这一处的符号并不影响定理对不对。

**用法**（不论哪个版本都一样）：要证某个性质对 $\mathcal{M}(\mathcal{E})$ 中所有集合成立，只需（$i$）证明它对 $\mathcal{E}$ 成立，（ii）证明「成立」这件事被递增并、递减交保持 —— 于是成立的集合构成一个含 $\mathcal{E}$ 的单调类，它 $\supseteq \mathfrak{m}(\mathcal{E}) = \mathcal{M}(\mathcal{E})$。测度扩张的唯一性、乘积测度的截口公式、可测函数的逼近，用的都是这个模式。

⚠ 与「环 $\to \sigma$环 的判据」是姊妹结果：那条说环 $+$ 单调 $\implies \sigma$环，这条说代数 $\implies$ 单调类与 $\sigma$代数重合。

参考：Halmos, Measure Theory, §6；Folland, Real Analysis, Theorem 2.37

#### Borel σ-代数　`def.borel`
*定义*　Borel σ-代数（Borel σ-Algebra $\mathfrak{B}_X$）

设 $X$ 是拓扑空间。$X$ 上的 **$Borel \sigma$代数**是由全体开集生成的 $\sigma$代数：

$$\mathfrak{B}_X := \mathcal{M}(\{ U \subseteq X : U\text{ 是开集} \})$$

$\mathfrak{B}_X$ 中的集合称为 **Borel 集**：开集、闭集、可数个开集之交（$G_\delta$）、可数个闭集之并（$F_\sigma$）等都属于 $\mathfrak{B}_X$。

开集族本身一般只是拓扑，不是 $\sigma$代数 —— 取它生成的 $\sigma$代数才得到 Borel 集全体。

$\mathbb{R}$ 上 $\mathfrak{B}_\mathbb{R}$ 也可以由半开区间 $\{ (a, b] : a < b \}$ 生成（或 { [a, b) }）。这些形式在构造测度时更好用，因为半开区间的「不交并」算起来干净。

参考：Folland, Real Analysis, §1.2

### 星团：测度的构造
> 造出「测度」这个对象本身：预测度 → 外测度 → Carathéodory 扩张 → 完备化与唯一性 → Lebesgue–Stieltjes 测度。

#### 测度　`def.measure`
*定义*　测度（Measure）

设 $\mathcal{M}$ 是 $X$ 上的 $\sigma$代数。函数 $\mu : \mathcal{M} \to [0, +\infty]$ 是一个**测度**，当且仅当

- **(i)**　$\mu(\emptyset) = 0$
- **(ii) 可数可加**：若 $\{E_{j}\}$ 是 $\mathcal{M}$ 中两两不交的集合列，则

$$\mu( \bigcup_{j=1}^{\infty} E_j ) = \sum_{j=1}^{\infty} \mu(E_j)$$

$(X, \mathcal{M}, \mu )$ 称为**测度空间**。

(i) 看起来多余（由 (ii) 取 $E_{j} = \emptyset$ 立刻得到），写出来是为了排除「恒取 $\infty$」这种没有意义的解，同时保证 (ii) 中的级数不是 $\infty - \infty$。

**可数可加是本定义唯一有实质内容的要求**：它把「大小」从有限可加提升到可数可加，代价是允许取值为 $\infty$。

⚠ 允许 $\mu (E) = +\infty$ 是必要的：$\mathbb{R}$ 的 Lebesgue 测度就是 $\infty$。

参考：Halmos, Measure Theory, §9；Folland, Real Analysis, §1.2

#### 预测度　`def.premeasure`
*定义*　预测度（Premeasure）—— 定义在环上的「测度」

若 $\mathcal{M}$ 只是一个**环**（不必是 $\sigma$代数），而 $\mu : \mathcal{M} \to [0, +\infty]$ 仍满足测度的两条：

$$\mu(\emptyset) = 0, \quad  \{E_j\}\text{ 两两不交} \implies \mu(\bigcup E_j) = \sum \mu(E_j)$$

则称 $\mu$ 是 $\mathcal{M}$ 上的**预测度**。

为什么要有这个中间概念：$\mathbb{R}$ 上半开区间 (a, b] 的全体只是一个基本类，它的有限不交并构成一个环，还不是 $\sigma$代数 —— 但这时已经能定义长度了，那就是预测度。

Carathéodory 扩张定理的作用就是把预测度从环一路提升到生成的 $\sigma$代数上。所以「**先造预测度，再扩张**」是构造测度的标准两步走。

参考：Halmos, Measure Theory, §9；Folland, Real Analysis, §1.4

#### 有限可加测度　`def.finitely-additive`
*定义*　有限可加测度（Finitely Additive Measure）

若 $\mu$ 只满足 (i) 与**有限**可加性：

$$A, B \in \mathcal{M}\text{ 两两不交} \implies \mu(A \cup B) = \mu(A) + \mu(B)$$
（由归纳，可推到任意有限多个不交集合），

则 $\mu$ 称为**有限可加测度**。

它比预测度还弱：预测度是可数可加的（只是定义域是环），有限可加测度只要求有限可加。

⚠ 有限可加 $\ne$ 可数可加：在 $\mathbb{N}$ 上定义 $\mu (E) = 0$（$E$ 有限）、$\mu (E) = +\infty$（$E$ 无限），它是有限可加的，但对 $\bigcup _{n} \{n\} = \mathbb{N}$ 不满足可数可加。历史上（Banach–Tarski 时代）确实认真考虑过只用有限可加性的「测度」，但那样连「长度」都构造不出来。

参考：Halmos, Measure Theory, §9

#### 有限 / σ-有限 / 半有限　`def.measure-space`
*定义*　测度空间的几种「大小」：有限、σ-有限、半有限

设 $(X, \mathcal{M}, \mu )$ 是测度空间。

- **有限**：$\mu(X) < \infty$
- **$\sigma$有限**：$X$ 能写成可数个测度有限的集合之并：$X = \bigcup_{j=1}^{\infty} E_j, \quad  \mu(E_j) < \infty$
- **半有限**：每个无穷测度的集合里都藏着正有限测度的子集：

$$\forall E \in \mathcal{M}, \mu(E) = \infty \implies \exists F \subseteq E, F \in \mathcal{M}, 0 < \mu(F) < \infty$$

$\text{有限} \implies \sigma-\text{有限} \implies\text{ 半有限}$，两个箭头都不可逆。

$\sigma$有限是**最常用的技术假设**：$\mathbb{R}$ 上的 Lebesgue 测度 $\sigma$有限（$\mathbb{R} = \bigcup _{n} [-n, n]$），而计数测度在 $\mathbb{R}$ 上不是 $\sigma$有限的。很多定理（Fubini、Radon–Nikodym、Carathéodory 扩张的唯一性）都要 $\sigma$有限。

半有限比 $\sigma$有限弱得多：可以造出「每个可测集要么零测度、要么无穷测度」的测度，它就是半有限的极端反例。

参考：Folland, Real Analysis, §1.2

#### 测度的基本性质　`prop.measure-basic`
*命题*　命题：测度的单调性、次可加性与两种连续性

设 $(X, \mathcal{M}, \mu )$ 是测度空间，以下集合都取自 $\mathcal{M}$。

- **(a) 单调**：$E \subseteq F \implies \mu(E) \le \mu(F)$
- **(b) 次可加**：$\mu( \bigcup_j E_j ) \le \sum_j \mu(E_j)$（不要求不交）
- **(c) 下连续**：$E_1 \subseteq E_2 \subseteq \cdots \implies \mu( \bigcup_j E_j ) = \lim_{j\to\infty} \mu(E_j)$
- **(d) 上连续**：$\mu(E_1) < \infty, \quad  E_1 \supseteq E_2 \supseteq \cdots \implies \mu( \bigcap_j E_j ) = \lim_{j\to\infty} \mu(E_j)$

(a)：把 $F$ 拆成 $F = E \cup (F \setminus E)$ 用可数可加（把余下的位置补 $\emptyset$）。

(b)：把 $\bigcup E_{j}$ 改成不交并：$F_{j} = E_{j} \setminus (E_{1} \cup \cdots \cup E_\{j-1\})$，则 $\mu (\bigcup E_{j}) = \sum \mu (F_{j}) \le \sum \mu (E_{j})$。

(c)：令 $A_{j} = E_{j} \setminus E_\{j-1\}$（$E_{0} = \emptyset$），则 $\bigcup E_{j}$ 是 $A_{j}$ 的不交并，而 $\mu (E_{n}) = \sum _\{j\le n\} \mu (A_{j})$ —— 两边取极限即可。

(d)：**「$\mu (E_{1}) < \infty$」不能省。** 反例：$X = \mathbb{N}$，$\mu =$ 计数测度，$E_{j} = \{j, j+1$ …}，则每个 $\mu (E_{j}) = \infty$ 但交集为 $\emptyset$、$\mu (\emptyset ) = 0$。

(c) 与 (d) 合起来说明：测度在集合的**单调极限**下连续 —— 这正与「单调类」这个词呼应。

参考：Halmos, Measure Theory, §9；Folland, Real Analysis, Prop. 1.3

#### 零集与完备　`def.null-set`
*定义*　μ-零集 / 完备测度空间（Null Set & Complete Measure Space）

设 $(X, \mathcal{M}, \mu )$ 是测度空间，$E \in \mathcal{M}$。

若 $\mu(E) = 0$，则称 $E$ 是 **$\mu$零集**（$\mu -null set$）。

若**零集的每个子集都可测**：

$$\forall E \in \mathcal{M}, \forall F \subseteq E : \mu(E) = 0 \implies F \in \mathcal{M}$$

则称 $\mu$（或这个测度空间）**完备**。

完备性说的是「零集的子集也是可测集」。这条**不是**自动成立的：$Borel \sigma$代数配上 Lebesgue 测度就不完备 —— Cantor 集是 Borel 集且测度为 0，它的某些子集不是 Borel 集。

所以常见做法是先把 Borel 测度**完备化**（见下一条定理），得到 $Lebesgue \sigma$代数。

参考：Halmos, Measure Theory, §11

#### 完备化定理　`thm.completion`
*定理*　定理：任何测度空间都能完备化

设 $(X, \mathcal{M}, \mu )$ 是测度空间。令

$$\mathcal{N} = \{ N \in \mathcal{M} : \mu(N) = 0 \}$$

$$\bar{\mathcal{M}} = \{ E \cup F : E \in \mathcal{M},\ F \subseteq N,\ N \in \mathcal{N} \}$$

则

1. $\bar{\mathcal{M}}$ 是一个 $\sigma$代数，且 $\mathcal{M} \subseteq \bar{\mathcal{M}}$；
2. 令 $\bar{\mu}(E \cup F) := \mu(E)$，它是 $\bar{\mathcal{M}}$ 上良定义的测度；
3. $(X, \bar{\mathcal{M}}, \bar{\mu})$ 是**完备**测度空间，称为 $(X, \mathcal{M}, \mu )$ 的**完备化**。

$\bar{\mathcal{M}}$ 的直观：在原来的可测集上「撒一点零集的小碎片」。

**良定义是要检查的**：$E \cup F$ 的写法不唯一，若 $E_{1} \cup F_{1} = E_{2} \cup F_{2}$，要证明 $\mu (E_{1}) = \mu (E_{2})$。做法是用 $E_{1} \subseteq E_{2} \cup N_{2}$（$N_{2}$ 零集）得 $\mu (E_{1}) \le \mu (E_{2})$，反向同理。

⚠ 完备化是「把零集的子集塞进来」，代价是 $\sigma$代数变大、测度不变。

参考：Halmos, Measure Theory, §13；Folland, Real Analysis, Prop. 1.6

#### 半有限部分　`def.semifinite-part`
*定义*　半有限部分（Semifinite Part of a Measure）

设 $(X, \mathcal{M}, \mu )$ 是测度空间。定义

$$\mu_0(E) := \sup \{ \mu(F) : F \subseteq E, F \in \mathcal{M}, \mu(F) < \infty \}$$

则 $\mu _{0}$ 称为 $\mu$ 的**半有限部分**，它是一个半有限测度，且 $\mu _{0} \le \mu$。

它的作用：把一个「可能有很坏的无穷值」的测度修成半有限的，同时尽量保留原来的有限部分。

若 $\mu$ 本身半有限，则 $\mu _{0} = \mu$ —— 所以这是「半有限化」操作。

参考：Folland, Real Analysis, §1.2

#### 外测度　`def.outer-measure`
*定义*　外测度（Outer Measure）

设 $X$ 是非空集合。函数 $\mu^* : \mathcal{P}(X) \to [0, +\infty]$ 是一个**外测度**，当且仅当

- $\mu^*(\emptyset) = 0$
- **单调**：$A \subseteq B \implies \mu^*(A) \le \mu^*(B)$
- **可数次可加**：$\mu^*( \bigcup_{j=1}^{\infty} A_j ) \le \sum_{j=1}^{\infty} \mu^*(A_j)$

外测度定义在**全体**子集上（$\mathcal{P}(X)$，不是某个 $\sigma$代数），代价是它只有**次**可加性。

所以外测度不是测度 —— 它太大了，连 $\mathcal{P}(X)$ 上都没有可加性。Carathéodory 的想法是在其中挑出一批「表现良好」的集合（下一条定义），外测度在它们上面才变成真正的测度。

Lebesgue 最初构造的就是外测度：$\mu^{*}(A) = \inf\{ \sum (b_{n} - a_{n}) : A \subseteq \bigcup (a_{n}, b_{n}) \}$。

参考：Halmos, Measure Theory, §11；Folland, Real Analysis, §1.4

#### 由预测度诱导外测度　`prop.outer-measure-induced`
*命题*　命题：从 $\mathcal{E}$ 上的 $\rho$ 诱导出一个外测度

设 $\mathcal{E} \subseteq \mathcal{P}(X)$，$\emptyset \in \mathcal{E}$，$X \in \mathcal{E}$，$\rho : \mathcal{E} \to [0, +\infty ]$ 满足 $\rho (\emptyset ) = 0$。对 $A \subseteq X$ 定义

$$\mu^*(A) := \inf \{ \sum_{j=1}^{\infty} \rho(E_j) : E_j \in \mathcal{E}, A \subseteq \bigcup_{j=1}^{\infty} E_j \}$$

（用 $\mathcal{E}$ 中可数个集合覆盖 $A$，取下确界。）则 $\mu^{*}$ 是 $X$ 上的一个**外测度**。

这个公式就是「用已知面积的砖块去盖住 $A$，取最省的盖法」—— Lebesgue 外测度正是它的特例（$\mathcal{E}$ 取开区间，$\rho$ 取长度）。

为什么要求 $X \in \mathcal{E}$：保证 $A \subseteq X$ 总有覆盖，inf 不是对空集取。

⚠ 这一步只用到 $\rho (\emptyset ) = 0$，**没用到可加性** —— 所以 $\mu^{*}$ 一般并不还原成 $\rho$。要还原，就得靠 Carathéodory。

参考：Halmos, Measure Theory, §11；Folland, Real Analysis, §1.4

#### μ*-可测集　`def.caratheodory-measurable`
*定义*　Carathéodory 可测性（$\mu^{*}$-Measurable Set）

设 $\mu^{*}$ 是 $X$ 上的外测度。$A \subseteq X$ 称为 **$\mu^{*}$-可测的**，当且仅当 $A$ 把每个集合都「干净地切成两块」：

$$\mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c)\quad  \forall E \subseteq X$$

因为 $\mu^{*}$ 只有次可加性，永远有 $\mu^*(E) \le \mu^*(E \cap A) + \mu^*(E \cap A^c)$。所以这个定义实际上只要求**反向的不等式**：$A$ 不「吃掉」任何东西。

这个定义初看很怪（为什么不用开集、闭集之类的直观条件？）—— 它的妙处是**完全内蕴**：只需要 $\mu^{*}$ 一个对象，不需要任何拓扑。所以它对任意外测度都能用。

直观：$A$ 是「可以随便切」的集合。

参考：Halmos, Measure Theory, §11；Folland, Real Analysis, Theorem 1.11

#### Carathéodory 定理　`thm.caratheodory`
*定理*　Carathéodory 定理：$\mu^{*}$-可测集构成 σ-代数，$\mu^{*}$ 在其上是完备测度

设 $\mu^{*}$ 是 $X$ 上的外测度，$\mathcal{M}$ 是全体 $\mu^{*}$-可测集。则

1. **$\mathcal{M}$ 是一个 $\sigma$代数**；
2. **$\mu^*|_\mathcal{M}$ 是 $(X, \mathcal{M})$ 上的一个测度**（即 $\mu^{*}$ 在 $\mathcal{M}$ 上真的可加）；
3. 这个测度是**完备**的。

这是整个测度论构造的枢纽：**外测度不必可加，但它的「可切集合」上就可加了**。

1 的证明是一个冗长的验证：对有限并、补、可数不交并逐一验算。

3 的完备性来自定义本身：若 $\mu^{*}(A) = 0$ 且 $B \subseteq A$，则对任意 $E$ 有 $\mu^{*}(E \cap B) \le \mu^{*}(B) = 0$ 且 $\mu^{*}(E \cap B^{c}) \le \mu^{*}$(E)，两边一夹就得到 $B$ 满足可测性条件。

参考：Halmos, Measure Theory, §11；Folland, Real Analysis, Theorem 1.11

#### 预测度还原　`prop.caratheodory-extension`
*命题*　命题：从预测度出发做 Carathéodory，原代数上的值不变

设 $\mathfrak{A} \subseteq \mathcal{P}(X)$ 是**代数**，$\mu _{0}$ 是 $\mathfrak{A}$ 上的**预测度**，$\mu^{*}$ 是由 $\mu _{0}$ 诱导的外测度（按上一条命题，取 $\mathcal{E} = \mathfrak{A}$、$\rho = \mu _{0}$）。则

1. $\mu^*|_\mathfrak{A} = \mu_0$
2. **$\mathfrak{A}$ 中每个集合都是 $\mu^{*}$-可测的**，因此

$$\mathfrak{A} \subseteq \mathcal{M}(\mathfrak{A}) \subseteq \mathcal{M}$$

（$\mathcal{M}$ 是全体 $\mu^{*}$-可测集），于是 $\mu^{*}|_\mathcal{M}$ 是 $\mu _{0}$ 在 $\sigma$代数 $\mathcal{M}(\mathfrak{A})$ 上的扩张。

这就是「预测度 $\to$ 外测度 $\to$ 测度」三步走的收官：**预测度在 $\sigma$代数的扩张上被完整还原**。

1 的两个方向：$\mu^*(A) \le \mu_0(A)$ 是直接的（$A$ 自己被 $A$ 覆盖）；反向要用 $\mu _{0}$ 的可数可加性。

2 是技术核心，要在 $\mathfrak{A}$ 上验证 Carathéodory 的可切性条件。

不仅 $\mathfrak{A}$ 本身，连它做可数并、可数交（以及反复做）得到的 $\mathfrak{A}_\sigma$、$\mathfrak{A}_\delta$、$\mathfrak{A}_\sigma \delta$、$\mathfrak{A}_\delta \sigma$ 里的集合也都 $\mu^{*}$-可测 —— 因为 $\mathcal{M}$ 是 $\sigma$代数，对这些操作封闭。

参考：Halmos, Measure Theory, §12；Folland, Real Analysis, Theorem 1.14

#### 扩张的唯一性　`thm.caratheodory-uniqueness`
*定理*　定理：Carathéodory 扩张是最大的，σ-有限时唯一

设 $\mu _{0}$ 是代数 $\mathfrak{A}$ 上的预测度，$\mu := \mu^{*}|_\mathcal{M}$ 是它经 Carathéodory 得到的扩张。若 $\nu$ 是 $\mathcal{M}(\mathfrak{A})$ 上**另一个**扩张 $\mu _{0}$ 的测度，则

$$\nu(E) \le \mu(E)\quad  \forall E \in \mathcal{M}(\mathfrak{A})$$

且当 $\mu(E) < \infty$ 时等号成立；进而，若 $\mu$ 是 $\sigma$有限的，则 $\nu = \mu$。

要点：**Carathéodory 扩张是「最大」的那一个**。原因藏在 $\mu^{*}$ 的定义里 —— 它是用「覆盖取下确界」造的，而任何扩张 $\nu$ 都要满足次可加性，于是 $\nu (A) \le \sum \nu (E_{j}) = \sum \mu _{0}(E_{j})$，对所有覆盖取下确界就得到 $\nu \le \mu^{*}$。

⚠ 不 $\sigma$有限时唯一性会**失效**：$\mathbb{R}$ 上取 $\mathfrak{A} =$ 有限并的半开区间，$\mu _{0} = Lebesgue$ 长度限制在 $\mathfrak{A}$ 上，则「Lebesgue 测度」与「Lebesgue 测度 + 集中在某个非 Lebesgue 可测集上的无穷值」都是扩张。$\sigma$有限性正是用来堵住这种漏洞的。

构造测度的标准收尾就是这一条：**先造预测度（好造），再扩张（Carathéodory 保证存在），最后用 $\sigma$有限保证唯一**。

参考：Halmos, Measure Theory, §13；Folland, Real Analysis, Theorem 1.14

#### F 给出的预测度　`prop.ls-premeasure`
*命题*　命题：单调右连续的 F 给出半开区间上的预测度

设 $F : \mathbb{R} \to \mathbb{R}$ 是**递增**且**右连续**的函数。在半开区间的全体上定义

$$\mu_0( (a, b] ) = F(b) - F(a)$$

（并规定 $\mu _{0}(\emptyset ) = 0$，扩充到由这些区间做有限不交并得到的代数 $\mathfrak{A}$ 上。）则 $\mu _{0}$ 是 $\mathfrak{A}$ 上的一个**预测度**。

**右连续正是用来保证可数可加性的**：若 (a, b] 是 $(a_{j}, b_{j}]$ 的不交并，把 $b_{j}$ 从左边逼近 $b_{j}$ 就能得到单调性的不等式。

取 $F(x) = x$ 就回到长度 $\mu _{0}((a, b]) = b - a$ —— 也就是 Lebesgue 测度的出发点。

⚠ 半开区间 (a, b] 比开区间好用：它们做不交并时端点不重叠，$\mu _{0}$ 的加法好验。用 [a, b) 也一样，只是右连续要换成左连续。

参考：Folland, Real Analysis, Theorem 1.16

#### F ↔ Borel 测度　`thm.ls-exists`
*定理*　定理：每个单调右连续的 F 对应一个 Borel 测度（差常数意义下）

对每个递增右连续的 $F : \mathbb{R} \to \mathbb{R}$，存在 $\mathbb{R}$ 上的一个 Borel 测度 $\mu _F$ 使

$$\mu_F( (a, b] ) = F(b) - F(a)\quad  \forall a < b$$

且这样的 $\mu _F$ 与 $F$ 的对应在**相差一个常数**的意义下是一一的。

证明就是把前两条接起来：$F \mapsto$ 预测度 $\mu _{0}$（上一条命题）$\to$ 由 Carathéodory 扩张到 $\mathfrak{B}_\mathbb{R}$（前面两条定理）。

「差常数」是因为 $\mu _F$ 只看增量 $F(b) - F(a)$：把 $F$ 换成 F + c，增量不变，测度也不变。所以严格的对应是「递增右连续函数模掉常数」$\leftrightarrow$「$\mathbb{R}$ 上局部有限的 Borel 测度」。

⚠ 「局部有限」这个限制是必要的：$\mu _F((-n, n]) = F(n) - F(-n)$ 必须有限，才能由递增实值函数给出。

参考：Folland, Real Analysis, Theorem 1.16

#### Lebesgue–Stieltjes 测度　`def.lebesgue-stieltjes`
*定义*　Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes Measure $\mu_F$）

由递增右连续函数 $F$ 按上一条定理得到的 Borel 测度 $\mu_F$ 称为 **$F$ 的 Lebesgue–Stieltjes 测度**。

特别地，取 $F(x) = x$，得到的 $\mu _F$ 就是 $\mathbb{R}$ 上的 **Lebesgue 测度** $m$：

$$m( (a, b] ) = b - a$$

若改用左连续的 $F$ 配区间 [a, b)，得到的是同一族测度 —— 只是把「右连续」换成了「左连续」。

$\mu _F$ 的**分布函数**视角：若 $F$ 还满足 $F(-\infty ) = 0$、$F(+\infty ) = 1$，那 $F$ 就是一个概率分布的分布函数，$\mu _F$ 就是对应的概率测度。

这条把「测度」和「函数」这两类对象接了起来：$\mathbb{R}$ 上（局部有限的）测度 $\leftrightarrow$ 递增右连续函数（模常数）。后面 Radon–Nikodym 会把「绝对连续」精确地实现为「$F$ 是可积函数的积分」。

参考：Folland, Real Analysis, Theorem 1.16

#### 几乎处处　`def.ae`
*定义*　几乎处处（Almost Everywhere, a.e.）

设 $(X, \mathcal{M}, \mu)$ 是测度空间。称一个关于点 $x$ 的命题 $P(x)$ **几乎处处成立**（记 a.e.），当且仅当

$$\exists E \in \mathcal{M}:\ \mu(E) = 0 \quad \text{且} \quad \forall x \in X \setminus E,\ P(x)\ \text{成立}$$

即：**使命题不成立的那些点构成一个零集**。

常见的用法：$f = g$ a.e.（$\{f \ne g\}$ 是零集）、$f_n \to f$ a.e.（不收敛的点是零集）、$F' = 0$ a.e.。

⭐ a.e. 是 Lebesgue 理论的**润滑剂**：$L^1$、$L^p$ 的元素其实是**函数的等价类**（a.e. 相等视为同一个），几乎所有收敛定理（MCT、Fatou、DCT 的 a.e. 版本、Egorov）都只要求 a.e. 收敛 —— 因为零集上的取值对积分没有贡献。

⚠ 「a.e. 相等」与「处处相等」是不同的关系：$\int |f| = 0 \implies f = 0$ a.e.（而不是处处 0）。
⚠ 零集的**子集**未必可测，除非测度空间完备 —— 这就是「完备化」要解决的问题。

参考：Rudin, Real and Complex Analysis, Ch. 1

### 星团：可测函数与收敛
> 造出「可测」这套语言：可测函数 → 简单函数逼近 → 五种收敛 → Egorov / Lusin。有了它才能谈积分。

#### 可测函数　`def.measurable-function`
*定义*　可测函数（Measurable Function）

设 $(X, \mathcal{M})$ 与 $(Y, \mathcal{N})$ 是可测空间。函数 $f : X \to Y$ 是 **$(\mathcal{M}, \mathcal{N})$可测的**，当且仅当每个可测集的原像可测：

$$f^{-1}(E) \in \mathcal{M}\quad  \forall E \in \mathcal{N}$$

为什么用「原像」而不是「像」：原像对交、并、补全部保持（$f^{-1}(\bigcup E_i) = \bigcup f^{-1}(E_i)$ 等），像是没有这些好性质的。所以可测性是「拉回」过去的条件。

等价说法（当 $Y$ 是拓扑空间、$\mathcal{N} = \mathfrak{B}_Y$ 时）：$f$ 可测 $\iff$ 每个开集的原像可测。

⚠ 「在 $E$ 上可测」是相对说法：$f$ 在 $E$ 上可测 $\iff$ $f|_E$ 关于子空间 $\sigma$代数 $\mathcal{M}_E$ 可测。

参考：Folland, Real Analysis, §2.1；Halmos, Measure Theory, §18

#### 可测性的两条判定准则　`prop.measurable-criterion`
*命题*　命题：复合保持可测；只需在生成元上验证

**(1) 复合**：若 $f : X \to Y$ 是 $(\mathcal{M}, \mathcal{N})$可测、$g : Y \to Z$ 是 $(\mathcal{N}, \mathcal{O})$可测，则 $g \circ  f$ 是 $(\mathcal{M}, \mathcal{O})$可测。

**(2) 只需验证生成元**：若 $\mathcal{N} = \mathcal{M}(\mathcal{E})$，则

$$f : X \to Y\text{ 可测} \iff f^{-1}(E) \in \mathcal{M}\quad  \forall E \in \mathcal{E}$$

(1)：对 $E \in \mathcal{O}$ 有 $(g\circ f)^{-1}(E) = f^{-1}(g^{-1}(E))$，两层都可测。

(2) 的 $(\Longleftarrow )$：令 $\mathcal{C} = \{ E \subseteq Y : f^{-1}(E) \in \mathcal{M} \}$。因为原像保持并、交、补，**$\mathcal{C}$ 是一个 $\sigma$代数**；题设说 $\mathcal{E} \subseteq \mathcal{C}$，于是 $\mathcal{M}(\mathcal{E}) \subseteq \mathcal{C}$，即所有可测集的原像都可测。

(2) 是整段里最常用的判定工具：要证 $f$ 可测，只需在一小族生成元上验证 —— 比如 $\mathbb{R}$ 值函数只需验证 $f^{-1}((a, \infty))$ 可测。

参考：Folland, Real Analysis, Prop. 2.1

#### 连续 ⟹ Borel 可测　`cor.continuous-measurable`
*推论*　推论：连续函数是 Borel 可测的

设 X, Y 是拓扑空间，各配 $Borel \sigma$代数 $\mathfrak{B}_X, \mathfrak{B}_Y$。则

$$f : X \to Y\text{ 连续} \implies f\text{ 是} (\mathfrak{B}_X, \mathfrak{B}_Y)-\text{可测的}$$

连续的定义就是「开集的原像开」；而开集生成 $\mathfrak{B}_Y$，用上一条的判定准则 (2) 立刻得到。

参考：Folland, Real Analysis, §2.1；Halmos, Measure Theory, §18

#### Lebesgue 可测　`def.lebesgue-measurable`
*定义*　Lebesgue 可测 / Borel 可测（$\mathbb{R} \to \mathbb{C}$ 的情形）

对 $f : \mathbb{R} \to \mathbb{C}$：

- 若 $f$ 是 $(\mathcal{L}, \mathfrak{B}_\mathbb{C})$-可测，称 $f$ **Lebesgue 可测**（$\mathcal{L}$ 是 $Lebesgue \sigma$代数）；
- 若 $f$ 是 $(\mathfrak{B}_\mathbb{R}, \mathfrak{B}_\mathbb{C})$-可测，称 $f$ **Borel 可测**。

⚠ **注意这里有个坑：两个 Lebesgue 可测函数的复合不一定 Lebesgue 可测。**



原因：复合要跑通 (1) 需要中间那个 $\sigma$代数配合，而 $\mathcal{L}$ 严格大于 $\mathfrak{B}_\mathbb{R}$。取 $f : \mathbb{R} \to \mathbb{R} Lebesgue$ 可测、$g : \mathbb{R} \to \mathbb{R} Lebesgue$ 可测，则 $g\circ f$ 关于 $\mathcal{L}$ 未必可测 —— 因为 $g^{-1}$ 只能保证把 $\mathfrak{B}_\mathbb{R}$ 里的集合拉回 $\mathcal{L}$，而 $f^{-1}$ 需要在 $\mathbb{R}$ 里取一个**非 Borel 的 Lebesgue 可测集**才能出问题。

标准修法：让中间那个函数 Borel 可测。若 $g$ 是 Borel 可测、$f$ 是 Lebesgue 可测，则 $g\circ f$ 是 Lebesgue 可测的。

参考：Folland, Real Analysis, §2.1

#### 积空间与实虚部　`prop.measurable-product-and-realimag`
*命题*　命题：可测函数到积空间；f 可测 $\iff$ 实部虚部可测

**(1)** 设 $(X, \mathcal{M})$、$(Y_\alpha , \mathcal{N}_\alpha ) (\alpha \in A)$ 是可测空间，$Y = \prod_{\alpha} Y_\alpha$，$\mathcal{N} = \otimes _{\alpha} \mathcal{N}_\alpha$，$\pi _\alpha : Y \to Y_\alpha$ 是投影。则

$$f : X \to Y\text{ 可测} \iff f_\alpha = \pi _\alpha \circ  f\text{ 可测}(\forall\alpha \in A)$$

**(2)** 特别地，$f : X \to \mathbb{C}$ 可测 $\iff$ $\operatorname{Re} f$ 与 $\operatorname{Im} f$ 都可测。

(1) 的 $(\implies )$：投影 $\pi _\alpha$ 本身可测（$\pi _\alpha ^{-1}(E_\alpha )$ 是柱集），用复合保持。

(1) 的 $(\Longleftarrow )$：只要证柱集的原像可测 —— 而 $f^{-1}(\pi _\alpha^{-1}(E_\alpha)) = f_\alpha^{-1}(E_\alpha)$ 可测 —— 再由积 $\sigma$代数由柱集生成、用判定准则 (2)。

(2) 的证明用了一个干净的事实：**$\mathbb{C}$ 的 $Borel \sigma$代数与 $\mathbb{R}^{2}$ 的 $Borel \sigma$代数是同一个**：



$$\mathfrak{B}_\mathbb{C} = \mathfrak{B}_{\mathbb{R}^2} = \mathfrak{B}_\mathbb{R} \otimes  \mathfrak{B}_\mathbb{R}$$



于是 (2) 就是 (1) 在 $A = \{1, 2\}$ 时的特例。

参考：Folland, Real Analysis, Prop. 2.3

#### 可测函数的封闭性　`prop.measurable-closure`
*命题*　命题：可测函数对和、积、sup、max、极限封闭

以下都设函数取值在 $\overline{\mathbb{R}} = [-\infty , +\infty ]$ 或 $\mathbb{C}$ 中，且可测。

- **和与积**：$f + g$、$fg$ 可测；
- **逐点上确界**：$\{f_j\}$ 可测 $\implies$ $\sup_j f_j$ 可测；
- **有限个取大**：$f, g$ 可测 $\implies$ $\max_{f, g}$ 可测；
- **极限**：若 $\lim_j f_j$ 逐点存在，则它是可测的。

$\sup_j f_j$ 的关键：$(\sup_j f_j)^{-1}((a, +\infty]) = \bigcup_j f_j^{-1}((a, +\infty])$ 是可数并，故可测。（取 $(a, +\infty]$ 这族生成元就够了。）

max 是 sup 的有限特例（把不够的地方补成 $-\infty$）。

极限：$\liminf_j f_j = \sup_n \inf_{j\ge n} f_j$，而 inf 可以由 sup 取负得到（$\inf f_j = -\sup_{-f_j}$），所以极限是可测函数经过可数次 sup/inf 得到的。

和与积：把 $\sup_j f_j$ 的做法搬到 $\{f+g > a\}$ 上（用有理数把 $f > q > a - g$ 拆开），或先对简单函数验证再逼近。

⭐ 这条命题是**整个积分理论的地基**：它保证「可测函数取极限之后仍然可测」，而后面 MCT / Fatou / DCT 全都是在取极限。

参考：Folland, Real Analysis, Prop. 2.7

#### 简单函数　`def.simple-function`
*定义*　简单函数（Simple Function）

可测函数 $\varphi : X \to \mathbb{C}$ 是**简单函数**，当且仅当它只取**有限多个值**。等价地，它可以写成

$$\varphi = \sum_{j=1}^{n} a_j \chi_{E_j}$$

其中 $a_j \in \mathbb{C}$，$E_j = \varphi^{-1}(\{a_j\}) \in \mathcal{M}$ 两两不交。

简单函数就是可测版本的「阶梯函数」—— 有限个「台阶」。

它是整个积分理论的**起点**：先给简单函数定义积分（就是加权和），再用「简单函数从下面逼近」把积分推广到一切非负可测函数。

参考：Folland, Real Analysis, §2.2

#### 简单函数逼近　`thm.simple-approximation`
*定理*　定理：可测函数都是简单函数列的极限

**(a)** 若 $f : X \to [0, +\infty]$ 可测，则存在简单函数列 $\{\varphi_n\}$ 使

$$0 \le \varphi_1 \le \varphi_2 \le \cdots \le f, \quad  \varphi_n \to f\text{ 逐点}, $$

并且**在 $f$ 有界的集合上还是一致收敛**。

**(b)** 一般地（$f : X \to \mathbb{C}$ 可测），可取 $\{\varphi_n\}$ 简单使

$$0 \le |\varphi_1| \le |\varphi_2| \le \cdots \le |f|, \quad  \varphi_n \to f\text{ 逐点}$$

(a) 的构造就是「切蛋糕」：把值域在 [0, n) 上按 $2^{-n}$ 切碎，超过 $n$ 的部分一律抹成 $n$ ——



$$\varphi_n = \sum_{k=0}^{2^n\cdot n-1} k\cdot2^{-n}\cdot\chi_{E_n^k} + n\cdot\chi_{F_n}, $$

$$E_n^k = f^{-1}((k\cdot2^{-n}, (k+1)\cdot2^{-n}]), \quad  F_n = f^{-1}((n, +\infty])$$



每一层都是可测集的原像，所以 $\varphi _{n}$ 是简单函数；$n$ 越大格子越细、天花板越高，于是单调递增地爬到 $f$。

(b) 把 $f = g + ih$ 拆成 $g = g^+ - g^-$、$h = h^+ - h^-$，对四个非负部分用 (a)：



$$\varphi_n = \psi_n^+ - \psi_n^- + i(\zeta _n^+ - \zeta _n^-)$$

参考：Folland, Real Analysis, Theorem 2.10

#### 完备性 ⟺ 不破坏可测性　`prop.complete-measurable`
*命题*　命题：$\mu$ 完备 $\iff$ 几乎处处相等 / 几乎处处收敛不破坏可测性

设 $(X, \mathcal{M}, \mu )$ 是测度空间。则 $\mu$ **完备**当且仅当下面两条都成立：

**(a)** $f$ 可测且 $f = g$ $\mu -\text{a.e.} \implies$ $g$ 可测；

**(b)** 每个 $f_n$ 可测且 $f_n \to f$ $\mu -\text{a.e.} \implies$ $f$ 可测。

$(\implies )$ 是完备性的直接好处：重新定义零集上的值不改变可测性。

$(\Longleftarrow )$ 是这条命题有意思的地方 —— 它说明**完备性恰好是「不破坏可测性」所需的全部**。构造：取零集 $E$（$\mu (E) = 0$）里一个不可测的子集 $F$（若 $\mu$ 不完备，这样的 $F$ 存在），令



$$f \equiv  0, \quad  g = \chi_F$$



则 $f$ 可测、$f = g$ 在 $E$ 外处处成立（即 a.e.），但



$$\{f \ne g\} = F$$



不可测，所以 $g^{-1}((0, +\infty]) = F$ 不可测，$g$ 不可测。(a) 失败 $\implies \mu$ 不完备。

参考：Folland, Real Analysis, Prop. 2.11

#### 完备化后可改在零集上　`prop.completion-measurable-function`
*命题*　命题：完备化空间上的可测函数，几乎处处等于一个原空间可测函数

设 $(X, \mathcal{M}, \mu )$ 是测度空间，$(X, \bar{\mathcal{M}}, \bar{\mu})$ 是它的完备化（见「完备化定理」）。若 $f$ 是 $\bar{\mathcal{M}}$-可测的函数，则存在 **$\mathcal{M}$可测**的函数 $g$ 使

$$f = g\quad  \bar{\mu}-\text{a.e.}$$

直观：完备化只多加了零集的子集，所以 $\bar{\mathcal{M}}$可测函数与 $\mathcal{M}$可测函数只差在零集上的取值。

证明思路：先看 $f = \chi_E$ 的情形（此时 $E = E' \cup F$，$E' \in \mathcal{M}$、$F$ 含于零集，取 $g = \chi_{E'}$）；对 $\mathcal{M}$可测的简单函数显然；一般情形取简单函数列 $\{\varphi_n\} \to f$，每个 $\varphi_n$ 在某个 $\bar{\mathcal{M}}$零集 $E_n$ 外等于一个 $\mathcal{M}$可测的 $\psi_n$。把零集并起来得 $N \in \mathcal{M}$，$\mu(N) = 0$，$N \supseteq \bigcup E_n$，令



$$g = \lim_n \chi_{N^c} \cdot \varphi_n$$



则 $g = f$ 在 $N^c$ 上成立，且 $g$ 是 $\mathcal{M}$可测的。

参考：Folland, Real Analysis, Prop. 2.12

#### 五种收敛　`def.convergence-modes`
*定义*　收敛的类型：一致 / 近一致 / a.e. / 依测度 / $L^{1}$

设 $f_n, f : X \to \mathbb{C}$ 可测，$X$ 带测度 $\mu$。

- **一致收敛** $f_n \rightrightarrows  f$：$\forall\varepsilon > 0, \exists N > 0, \forall x \in X, n > N \implies |f_n(x) - f(x)| < \varepsilon$
- **几乎处处收敛** $f_n \to f$ a.e.：存在零集 $E$ 使 $f_n(x) \to f(x)$ 对一切 $x \in X \setminus E$ 成立
- **依测度收敛** $f_n \to f$ 依测度：$\forall\varepsilon > 0, \forall\delta > 0, \exists N, \forall n > N : \mu(\{x : |f_n(x) - f(x)| > \delta\}) < \varepsilon$
- **$L^{1}$ 收敛**：$\int |f_n - f| d\mu \to 0$
- **近一致收敛**：$\forall\varepsilon > 0$，存在 $E$ 使 $\mu(E) < \varepsilon$ 且 $f_n \rightrightarrows  f$ 在 $E^c$ 上一致

强弱关系（都能画成箭头）：



$$\text{一致} \implies\text{ 近一致} \implies \text{a.e.}$$

$$\text{一致} \implies\text{ 近一致} \implies\text{ 依测度}$$

$$L^1 \implies\text{ 依测度}$$



⚠ 「依测度收敛」是最温和的一个：它不要求任何一处真的收敛，只要求「收敛失败的区域」越来越小。

⚠ **a.e. 收敛与依测度收敛互不包含**：$\text{a.e.} \implies$ 依测度在**有限测度**空间上成立（Egorov 的推论），反过来依测度 $\nRightarrow$ a.e.（见反例 iv）。

⚠ $L^{1}$ 收敛 $\nRightarrow$ a.e. 收敛，a.e. 收敛 + 控制函数 $\implies L^{1}$ 收敛（这就是 DCT）。

参考：Folland, Real Analysis, §2.4

#### 四个标准反例　`prop.convergence-counterexamples`
*命题*　命题：四个标准反例（把各种收敛区分开）

在 $\mathbb{R}$（或 [0, 1]）上取 Lebesgue 测度。

- **(i)** $f_n = n^{-1} \chi_{(0, n)}$：$f_n \rightrightarrows  0$ **一致**收敛。
- **(ii)** $f_n = \chi_{(n, n+1)}$：$f_n \to 0$ **逐点**（因而 a.e.），但**不一致**（$\sup_x |f_n| = 1$），也不 $L^{1}$ 收敛（$\int f_n = 1 \nrightarrow  0$）。
- **(iii)** $f_n = n \chi_{[0, 1/n]}$：$f_n \to 0$ a.e.（也依测度收敛，因为 $\mu(\{|f_n| > \delta\}) = 1/n \to 0$），但**不 $L^{1}$ 收敛**（$\int f_n = 1$ 对一切 $n$）。
- **(iv) 二进制填充**：把右下角越来越小的区间排成一列 ——

$$f_1 = \chi_{[0,1]}, f_2 = \chi_{[0,1/2]}, f_3 = \chi_{[1/2,1]}, f_4 = \chi_{[0,1/4]}, \cdots$$
即 $f_n = \chi_{[j/2^k, (j+1)/2^k]}$（$n = 2^k + j$）：它**依测度**收敛到 0，但对**任何** $x \in [0,1]$ 都**不**收敛。

(iii) 是「a.e. 收敛 $\nRightarrow L^{1}$ 收敛」的标准反例 —— 也是 DCT 里「控制函数不能省」的根据。

(iv) 是「依测度收敛 $\nRightarrow$ a.e. 收敛」的标准反例。它的机制很值得记住：**每次取一个越来越窄的区间，但位置不停地搬家** —— 质量在每一处都只停留一瞬间，所以每点都不收敛，但「出错集合」的测度趋于 0。

⭐ 这四个例子基本覆盖了所有反方向的护栏：一致最强、依测度最弱、a.e. 与 $L^{1}$ 各自独立。

参考：Folland, Real Analysis, §2.4

#### 依测度 Cauchy　`def.cauchy-in-measure`
*定义*　依测度 Cauchy 序列

可测函数列 $\{f_n\}$ 是**依测度 Cauchy 的**，当且仅当

$$\forall\varepsilon > 0, \mu(\{x : |f_n(x) - f_m(x)| \ge \varepsilon\}) \to 0\quad  (m, n \to \infty)$$

即：在测度意义下，下标够大之后各项彼此越来越近。

**依测度 $Cauchy \iff$ 依测度收敛**：两个方向都能证（收敛 $\implies Cauchy$ 由三角不等式；$Cauchy \implies$ 收敛就是下一条定理）。

这是「依测度」这个拓扑的一个好处：它**完备**。相比之下 a.e. 收敛既不强也不完备，$L^{1}$ 收敛则完备（Riesz–Fischer）。

参考：Folland, Real Analysis, §2.4

#### 依测度 Cauchy ⟹ 收敛　`thm.cauchy-in-measure`
*定理*　定理：依测度 Cauchy 列必有依测度极限，且有一子列 a.e. 收敛

若 $\{f_n\}$ 依测度 Cauchy，则存在可测函数 $f$ 使

$$f_n \to f\text{ 依测度}, $$

并且存在**子列** $\{f_{n_j}\}$ 使

$$f_{n_j} \to f\quad  \text{a.e.}$$

⭐ 这是「依测度收敛」最有用的性质：**收敛本身不保证任何一处真的收敛，但总能抽出一列几乎处处收敛的子列**。

证明的工具是 Borel–Cantelli 型的推理：造出 $\sum_k \mu(E_k) < \infty$ 的一族「坏集合」，则几乎每个点只落进有限多个坏集合。

这也是 Riesz 定理（a.e. 收敛 $\iff$ 依测度收敛 + 子列）的那一半。

参考：Folland, Real Analysis, Theorem 2.30

#### L¹ 收敛 ⟹ 依测度收敛　`prop.L1-implies-measure`
*命题*　命题：$L^{1}$ 收敛蕴含依测度收敛（Markov 不等式）

若 $f_n \to f$ 于 $L^1$，则 $f_n \to f$ 依测度：

$$\int |f_n - f| \to 0 \implies f_n \to f\text{ 依测度}$$

工具是 **Markov（Chebyshev）不等式**：$
\mu(\{|g| \ge \varepsilon\}) \le (1/\varepsilon)\cdot\int |g| d\mu$

（因为 $\varepsilon \chi_{\{|g| \ge \varepsilon\}} \le |g|$，两边积分即可。）取 $g = f_n - f$ 就得到结论。

⚠ 反方向不成立：反例 (iii) 就是依测度收敛但不 $L^{1}$ 收敛。

参考：Folland, Real Analysis, Prop. 2.29

#### Egorov 定理　`thm.egorov`
*定理*　Egorov 定理：a.e. 收敛 $\implies$ 近一致

设 $\mu(X) < \infty$，且 $f_n \to f$ a.e.。则 $f_n \to f$ **近一致**：

$$\forall\varepsilon > 0, \exists E \subseteq X : \mu(E) < \varepsilon,\text{ 且} f_n \rightrightarrows  f\text{ 在} X \setminus E\text{ 上一致}$$

⭐ 「几乎处处收敛」听起来很弱，但 Egorov 说：只要空间**有限测度**，它其实差一点就是**一致收敛** —— 代价只是丢掉一个任意小的集合。

⚠ **「$\mu(X) < \infty$」不能省。** 反例：$f_n = \chi_{(n, n+1)}$ 在 $\mathbb{R}$ 上，a.e. 收敛到 0，但丢掉任何有限测度的集合后，剩下的部分仍有 $\sup = 1$，无法一致收敛。

这是「丢掉小集合换取好性质」这一类结论的模板（Lusin 定理也是这个模式）。

参考：Folland, Real Analysis, Theorem 2.33

#### Lusin 定理　`cor.lusin`
*推论*　Lusin 定理：可测函数几乎处处连续

设 $f : [a, b] \to \mathbb{C}$ 是 Lebesgue 可测的。则对任意 $\varepsilon > 0$，存在**紧集** $E \subseteq [a, b]$ 使

$$\mu(E^c) < \varepsilon,\text{ 且} f|_E\text{ 连续}$$

⭐ 「可测」这个条件看起来很弱，但 Lusin 说：可测函数差一点就是**连续**函数 —— 只要允许把定义域挖掉一小块。

与 Egorov 的分工：Egorov 说「一列函数」几乎一致收敛，Lusin 说「一个函数」几乎连续。两者都是「丢掉小集合换取正则性」。

⚠ 挖掉的那块必须容许是开集，剩下的必须是**紧**集（在 [a,b] 上紧 $\iff$ 有界闭），不能只是可测集。

参考：Folland, Real Analysis, Theorem 2.34

### 星团：积分
> 造出 Lebesgue 积分与 L¹：简单函数的加权和 → 非负函数的 sup → 单调收敛 / Fatou / 控制收敛三大定理 → 可积函数。

#### L⁺　`def.lplus`
*定义*　$L^{+}$：非负可测函数全体

固定测度空间 $(X, \mathcal{M}, \mu )$。记

$$L^+ := \{ f : X \to [0, +\infty] : f\text{ 可测} \}$$

即取值在**扩充**非负实数里的可测函数全体。

⚠ 取值允许是 $\infty$，这是刻意的：先把积分对 $[0, +\infty ]$ 值的函数定义好，收敛定理（sup / 极限）在整个 $L^{+}$ 里封闭，不必反复讨论「积分是不是有限」。

「可积」（积分有限）是之后单独加的条件，见 $L^{1}$ 的定义。

参考：Folland, Real Analysis, §2.2

#### 简单函数的积分　`def.integral-simple`
*定义*　简单函数的积分：加权和

设 $\varphi \in L^+$ 是简单函数，写成标准形式

$$\varphi = \sum_{j=1}^{n} a_j \chi_{E_j}, \quad  a_j \ge 0, E_j \in \mathcal{M}\text{ 两两不交}$$

则定义

$$\int \varphi d\mu := \sum_{j=1}^{n} a_j \mu(E_j)$$

这就是「面积 $=$ 各层高度 $\times$ 各层测度」—— 完全照着 Riemann 和的样子写，只是把区间换成了可测集。

要检查**良定义**：同一个 $\varphi$ 可以写成不同的标准形式（比如把某个 $E_{j}$ 再拆开），但由 $\mu$ 的有限可加性，结果一样。

约定 $0 \cdot \infty = 0$：这一步很关键 —— 它让「在无穷测度集上取 0 的函数」积分为 0，符合直觉。

参考：Folland, Real Analysis, §2.2

#### 简单函数积分的性质　`prop.simple-integral-props`
*命题*　命题：简单函数积分的四条基本性质

设 $\varphi, \psi$ 是简单函数。

- **(a)** $c > 0 \implies \int c\varphi = c\int \varphi$
- **(b)** $\int (\varphi + \psi) = \int \varphi + \int \psi$
- **(c)** $\varphi \le \psi \implies \int \varphi \le \int \psi$
- **(d)** $A \mapsto \int_A \varphi d\mu$ 是 $\mathcal{M}$ 上的**测度**。

(d) 是这一组里最有用的：它把「对简单函数积分」变成了「一个测度」，于是可数可加性、单调连续性（关于 $A$）全部免费。



⚠ 后面 MCT 的证明正是**靠 (d)**：证明里要断言 $\lim_n \int_{E_n} \varphi = \int \varphi$，用的就是「$A \mapsto \int _A \varphi$ 是测度」加上测度的下连续性（$E_n \uparrow  X$）。

(a) 里 $c > 0$ 而不是 $c \ge 0$：因为约定 $0\cdot \infty = 0$，$c = 0$ 时左边也自动成立，写成 $c > 0$ 只是为了不啰嗦。

参考：Folland, Real Analysis, Theorem 2.13

#### 非负函数的积分　`def.integral-nonneg`
*定义*　非负可测函数的积分：从下面取上确界

设 $f \in L^+$。定义

$$\int f d\mu := \sup \{ \int \varphi d\mu : 0 \le \varphi \le f, \varphi\text{ 是简单函数} \}$$

直观：用简单函数从**下面**去顶 $f$，取这些面积的**上确界**。这与 Jordan 测度「从外面盖、从里面填」的做法不同 —— 这里只从里面填。

为什么不再要求「外面的盖」：因为测度已经在对偶的那一侧（$\mu$ 本身是从外面用外测度定义的），简单函数的下确界只会把积分定义偏小。

⚠ 这个定义只对非负函数管用。对一般实值函数，先拆成正负部再相减（见「复函数的积分」）。

参考：Folland, Real Analysis, §2.2

#### 单调收敛定理　`thm.mct`
*定理*　单调收敛定理（MCT, Monotone Convergence Theorem）

设 $\{f_n\} \subseteq L^+$ 满足

$$f_1 \le f_2 \le \cdots, \quad  f_n \uparrow  f\text{ 逐点}, $$

则

$$\int f = \lim_{n\to\infty} \int f_n$$

⭐ 这是整个 Lebesgue 积分理论的**发动机**：后面的逐项积分、Fatou、DCT 全都是它的推论。

对比 Riemann 积分：那里「积分与极限交换」需要一致收敛这样强的条件；这里只要**单调**就够了 —— 这就是 Lebesgue 积分的全部好处。

⚠ 两者都可能是 $\infty$，等式在扩充意义下理解。

参考：Folland, Real Analysis, Theorem 2.14

#### 逐项积分　`thm.termwise-integration`
*定理*　定理：非负函数级数可以逐项积分

设 $\{f_n\} \subseteq L^+$，则

$$\int \sum_{n=1}^{\infty} f_n = \sum_{n=1}^{\infty} \int f_n$$

（现在 $f_n \ge 0$，所以两边都可能是 $\infty$；结论等价于：不可能出现「逐项积分发散而整体积分有限」的怪事。）

用法上这就是**无条件地交换 $\int$ 和 $\sum$**，不需要控制函数 —— 代价是要求非负。有正有负时必须换 DCT。

参考：Folland, Real Analysis, Theorem 2.15

#### 积分为零 ⟺ 几乎处处为零　`prop.integral-zero-iff`
*命题*　命题：$\int f = 0 \iff f = 0 \text{a.e.}$

设 $f \in L^+$。则

$$\int f d\mu = 0 \iff f = 0 \mu-\text{a.e.}$$

$(\Longleftarrow )$ 只要 $f$ 在零集外为零，下确界里的每个简单函数 $\varphi \le f$ 也几乎处处为零，从而 $\int \varphi = 0$。

$(\implies )$ 记 $A_n = \{f > 1/n\}$，则 $(1/n)\cdot\mu(A_n) \le \int f = 0$，故 $\mu (A_{n}) = 0$；而 $\{f > 0\} = \bigcup_n A_n$ 是零测的。

⭐ 这条把「积分」与「几乎处处」这两个概念绑在一起了 —— 它是 $L^{1}$ 里「$f = g$」按 a.e. 理解的原因。

参考：Folland, Real Analysis, Prop. 2.16

#### MCT（a.e. 版本）　`cor.mct-ae`
*推论*　推论：单调收敛定理的几乎处处版本

设 $\{f_n\} \subseteq L^+$，$f \in L^+$。若对**几乎处处的** $x$ 有

$$f_n(x) \uparrow  f(x), $$

则

$$\int f = \lim_{n\to\infty} \int f_n$$

把例外集 $N$（$\mu (N) = 0$）上的值全部改掉不影响任何一边的积分：左边用「积分为零 $\iff$ 几乎处处为零」，右边用「零集不改变简单函数的积分」。所以收敛只在 a.e. 上成立就够。

参考：Folland, Real Analysis, §2.2；Rudin, Real and Complex Analysis, Ch. 1

#### Fatou 引理　`lem.fatou`
*引理*　Fatou 引理（Fatou's Lemma）

设 $\{f_n\} \subseteq L^+$，则

$$\int \liminf_{n\to\infty} f_n \le \liminf_{n\to\infty} \int f_n$$

⚠ 注意不等号方向：**下面的**极限在积分外面，得到的**不大于**积分的下极限。也就是说「取极限」会让积分**变小**，不会变大。

这是 MCT 去掉单调性后剩下的东西 —— 单调性一旦丢掉，等号就退化成不等式。

反向的例子：$f_n = \chi_{[n, n+1]}$（在 $\mathbb{R}$ 上），则每个 $\int f_{n} = 1$ 但 $\int \liminf f_{n} = 0$。

参考：Folland, Real Analysis, Theorem 2.18

#### Fatou 的推论　`cor.fatou`
*推论*　推论：$f_{n} \to f \text{a.e.} \implies \int f \le \lim \int f_{n}$

设 $\{f_n\} \subseteq L^+$，$f \in L^+$，且 $f_n \to f$ a.e.。则

$$\int f \le \liminf_{n\to\infty} \int f_n$$

a.e. 收敛时 $\liminf f_n = f$，直接套 Fatou 引理即可。

参考：Folland, Real Analysis, §2.2；Rudin, Real and Complex Analysis, Ch. 1

#### 积分有限的后果　`prop.finite-integral-consequences`
*命题*　命题：$\int f < \infty$ 时，f 几乎处处有限、支撑 σ-有限

设 $f \in L^+$ 且 $\int f < \infty$。则

- $\{x : f(x) = \infty\}$ 是零集；
- $\{x : f(x) > 0\}$ 是 **$\sigma$有限**的（即它是可数个有限测度集之并）。

第一条：若 $\mu(\{f = \infty\}) > 0$，则对每个 $n$ 有 $\int f \ge n\cdot\mu(\{f=\infty\})$，让 $n \to \infty$ 得 $\int f = \infty$。

第二条：$\{f > 0\} = \bigcup_n \{f > 1/n\}$，而 $\mu(\{f > 1/n\}) \le n\int f < \infty$ —— 所以是**可数**个有限测度集之并。

⭐ 这条解释了为什么「$L^{1}$ 里的函数几乎处处有限」是免费的，也预告了 Lp 空间里的 $\sigma$有限假设。

参考：Folland, Real Analysis, Prop. 2.20

#### 复函数的积分　`def.integral-complex`
*定义*　复值函数的积分：正负部相减

设 $f : X \to \overline{\mathbb{R}}$ 可测，记正部与负部

$$f^+ = \max_{f, 0}, \quad  f^- = \max_{-f, 0}$$

（两者都属于 $L^{+}$，且 $f = f^+ - f^-$、$|f| = f^+ + f^-$。）若 $\int f^+$ 与 $\int f^-$ 中**至少一个有限**，定义

$$\int f := \int f^+ - \int f^-$$

对复值函数，拆实部虚部：$\int f := \int \operatorname{Re} f + i \int \operatorname{Im} f$（要求两个积分都有意义）。

⚠ 「至少一个有限」是为了避免 $\infty - \infty$：那是不定式，必须排除。

若两个都有限，就说 $f$ **可积**（见下一条）。

对复值函数，$\operatorname{Re} f$ 与 $\operatorname{Im} f$ 可积 $\iff f$ 可积，因为 $|\operatorname{Re} f|, |\operatorname{Im} f| \le |f| \le |\operatorname{Re} f| + |\operatorname{Im} f|$。

参考：Folland, Real Analysis, §2.3

#### 可积 / L¹　`def.integrable`
*定义*　可积函数与 $L^{1}$ 空间

实值可测 $f$ **可积**，当且仅当 $\int f^+ < \infty$ 且 $\int f^- < \infty$。等价地：

$$f\text{ 可积} \iff \int |f| d\mu < \infty$$

复值可测 $f$ 可积，当且仅当 $\int |f| d\mu < \infty$。可积函数全体记作

$$L^1(\mu) = L^1(X, \mathcal{M}, \mu) = L^1(X, \mu)$$

⭐ **可积 $\iff$ 绝对值可积**：这是 Lebesgue 积分（终于）真正好用的地方 —— 因为 $|f| \in L^{+}$，一切非负情形的定理都能直接套用。

（对比 Riemann 反常积分：那里 $\int f$ 收敛而 $\int|f|$ 发散是可能的，叫条件收敛。）

⚠ 严格说 $L^{1}$ 的元素是**函数的等价类**（a.e. 相等视为同一个），所以「$\int |f| = 0 \implies f = 0$」要在 a.e. 意义下读。这是后面 Lp 空间成为赋范空间的关键一步。

参考：Folland, Real Analysis, §2.3

#### L¹ 是向量空间　`prop.L1-vector-space`
*命题*　命题：可积函数全体是向量空间，$\int$ 线性

$X$ 上可积的（实值）函数全体构成一个**实向量空间**，并且

$$\int (af + bg) = a\int f + b\int g\quad  \forall a, b \in \mathbb{R}$$

即 $f \mapsto \int f$ 是线性的。

「是向量空间」要在 a.e. 意义下理解（两个 a.e. 相等的可积函数看作同一个元素）。

线性来自正负部分解后对简单函数的 (a)(b) 逐条验证 —— 这条本身不深，但它是 $L^{1}$ 成为**赋范空间**的第一步，后面 Lp 空间整套理论都从这儿开始。

参考：Folland, Real Analysis, Prop. 2.21

#### 积分绝对值不等式　`prop.integral-abs-ineq`
*命题*　命题：$|\int f| \le \int |f|$

设 $f \in L^1(\mu)$，则

$$| \int f d\mu | \le \int |f| d\mu$$

复情形：取 $\alpha = e^{-i\theta}$ 使 $\alpha\int f$ 是实数且等于 $|\int f|$，则 $|\int f| = \int \alpha f = \int \operatorname{Re}(\alpha f) \le \int|\alpha f| = \int|f|$。

参考：Folland, Real Analysis, Prop. 2.22

#### L¹ 函数的支撑 σ-有限　`prop.L1-support-sigma-finite`
*命题*　命题：$f \in L^{1} \implies \{f \ne 0\}$ 是 σ-有限的

若 $f \in L^1(\mu)$，则

$$\{x : f(x) \ne 0\}$$

是 $\sigma$有限的。

把「积分有限的后果」分别用到 |f| 上即可：$\{f \ne 0\} = \{|f| > 0\}$。

参考：Folland, Real Analysis, §2.3

#### 何时两个函数积分处处相同　`prop.integrals-equal-iff`
*命题*　命题：$\int_E f = \int_E g$ 对一切 $E \iff f = g \text{a.e.}$

设 $f, g \in L^1(\mu)$。则下列三条等价：

$$\int_E f d\mu = \int_E g d\mu\quad  \forall E \in \mathcal{M}; $$
$$\int |f - g| d\mu = 0; $$
$$f = g\quad  \mu-\text{a.e.}$$

作用：这类命题就是「用对一切可测集的积分来**识别**函数」。

后面 Radon–Nikodym 定理的**唯一性**部分正是用的这一条 —— 两个密度给出同一个测度，就必须 a.e. 相等。

（$E$ 取遍 $\mathcal{M}$ 而不是只取 $X$，是关键：只对 $X$ 相等是不够的。）

参考：Folland, Real Analysis, Cor. 2.23

#### 控制收敛定理　`thm.dct`
*定理*　控制收敛定理（DCT, Dominated Convergence Theorem）

设 $\{f_n\} \subseteq L^1$，$f_n \to f$ a.e.，且存在**控制函数** $g \in L^1$ 使

$$|f_n| \le g\quad  \text{a.e.}\quad  \forall n$$

则 $f \in L^1$ 且

$$\int f = \lim_{n\to\infty} \int f_n$$

⭐ 这是实际计算里**用得最多**的收敛定理。三个条件缺一不可：



$\cdot \text{a.e.}$ 收敛 —— 不能去掉（$\chi_{[n,n+1]}$ 反例）；

$\cdot$ 控制函数 $g \in L^{1}$ —— 不能去掉（$n\chi_{[0,1/n]}$ 在 [0,1] 上每点趋于 0，但积分为 1）；

$\cdot$ 必须是**可积**的 $g$，光是「有界」不够（在无穷测度空间上）。



为什么叫「控制」：$g$ 把所有 $f_{n}$ 关在一间可积的笼子里，所以质量无处可逃，极限过程不会漏掉面积。

参考：Folland, Real Analysis, Theorem 2.24

#### L¹ 的逐项积分　`thm.termwise-L1`
*定理*　定理：$\sum\int|f_{j}| < \infty \implies \sum f_{j}$ 几乎处处收敛且可逐项积分

设 $\{f_j\} \subseteq L^1$ 满足

$$\sum_{j=1}^{\infty} \int |f_j| d\mu < \infty$$

则 $\sum_j f_j$ 几乎处处收敛到一个 $L^1$ 中的函数，并且可以逐项积分：

$$\int \sum_{j=1}^{\infty} f_j = \sum_{j=1}^{\infty} \int f_j$$

与「非负函数逐项积分」的区别：那里不需要任何收敛性假设（非负性保证了没有抵消），这里**需要** $\sum \int |f_{j}| < \infty$ —— 用可积性换来「允许有正有负」。

这是 Fubini–Tonelli 定理证明里的关键工具。

参考：Folland, Real Analysis, Theorem 2.25

#### L¹ 里的逼近　`thm.approximation-L1`
*定理*　定理：$L^{1}$ 中可用简单函数 / 连续函数逼近

设 $f \in L^1(\mu)$。则对任意 $\varepsilon > 0$，存在简单函数 $\varphi = \sum_j a_j \chi_{E_j}$ 使

$$\int |f - \varphi| d\mu < \varepsilon$$

进一步，若 $\mu$ 是 **$\mathbb{R}$ 上的 Lebesgue–Stieltjes 测度**，还可以要求 $E_{j}$ 是开区间的有限并；甚至可以取一个**连续函数** $g$（在某个有界区间外恒为 0）使

$$\int |f - g| d\mu < \varepsilon$$

意义：**简单函数与连续函数在 $L^{1}$ 里是稠密的**。所以很多命题只要对这两类函数验证就够了，再取极限。

证明思路：先把 $f$ 拆成 $\operatorname{Re} f^{+}$、$\operatorname{Re} f^{-}$、$\operatorname{Im} f^{+}$、$\operatorname{Im} f^{-}$ 四个非负部分，各自用简单函数逼近（简单函数逼近定理）；$\mathbb{R}$ 的情形再把定义域切成有界块，用连续函数去顶半开区间的指示函数。

⚠ 连续函数那一句**依赖 $\mu$ 是 Lebesgue–Stieltjes 测度**：换一个任意测度，简单函数的逼近照旧，连续函数的说法就不成立了。

参考：Folland, Real Analysis, Theorem 2.26

#### 交换极限/导数与积分　`thm.differentiate-under-integral`
*定理*　定理：在积分号下取极限与求导

设 $f : X \times [a, b] \to \mathbb{C}$（$-\infty < a < b < \infty$），$f(\cdot, t)$ 对每个 $t \in [a, b]$ 都可积。记

$$F(t) := \int_X f(x, t) d\mu(x)$$

**(a) 连续性**：若存在 $g \in L^1(\mu)$ 使 $|f(x, t)| \le g(x)$ 对一切 $x, t$ 成立，且对每个 $x$ 有 $\lim_{t\to t_0} f(x, t) = f(x, t_0)$，则

$$\lim_{t\to t_0} F(t) = F(t_0)$$

**(b) 求导**：若 $\partial f / \partial t$ 处处存在，且存在 $g \in L^1(\mu)$ 使 $| \partial f / \partial t(x, t) | \le g(x)$ 对一切 $x, t$ 成立，则 $F$ 可微，且

$$F'(t) = \int_X \partial f / \partial t(x, t) d\mu(x)$$

两个控制条件都是「用同一个 $g$ 控制一整族函数」—— 这正是 DCT 的标准用法。

⚠ $g$ 必须属于 $L^{1}$（不能只是「局部有界」）。

这是「带参变量积分」的两个基本定理：连续性可以交换极限与积分，可导性可以交换导数与积分。

参考：Folland, Real Analysis, Theorem 2.27

### 星团：乘积测度与 Fubini
> 造出「一块块算」的办法：积 σ-代数 → 截口 → 乘积测度 → Fubini–Tonelli。

#### 积 σ-代数　`def.product-sigma`
*定义*　积 σ-代数（Product σ-Algebra）

设 $\{ (X_\alpha , \mathcal{M}_\alpha ) \}_\{\alpha \in A\}$ 是一族可测空间，$X = \prod_{\alpha \in A} X_\alpha$，投影 $\pi _\alpha : X \to X_\alpha$。**积 $\sigma$代数**定义为

$$\otimes _{\alpha \in A} \mathcal{M}_\alpha := \mathcal{M}(\{ \pi _\alpha^{-1}(E_\alpha) : E_\alpha \in \mathcal{M}_\alpha, \alpha \in A \})$$

即由全体**柱集**生成的 $\sigma$代数。柱集 $\pi _\alpha ^{-1}(E_\alpha )$ 就是「只对第 $\alpha$ 个坐标提要求」的集合。

⚠ 一般**不能**定义成「$\prod E_\alpha$ 的全体生成的 $\sigma$代数」—— 那只在**可数**指标集时等价（见下一条）。

这样定义的原因：投影 $\pi _\alpha$ 应当是可测的，而 $\sigma$代数要对逆像封闭 —— 取最小的那一个就够了。

参考：Folland, Real Analysis, §2.1

#### 积 σ-代数的生成基　`prop.product-sigma-base`
*命题*　命题：把各坐标的 σ-代数换成生成元，积 σ-代数不变

设每个 $\mathcal{M}_\alpha = \mathcal{M}(\mathcal{E}_\alpha )$（即 $\mathcal{M}_\alpha$ 由 $\mathcal{E}_\alpha$ 生成）。令

$$\mathcal{F} = \{ \pi _\alpha^{-1}(E_\alpha) : E_\alpha \in \mathcal{E}_\alpha, \alpha \in A \}$$

则

$$\otimes _{\alpha \in A} \mathcal{M}_\alpha = \mathcal{M}(\mathcal{F})$$

意义：算积 $\sigma$代数时，**每一维只需要拿一个生成元族就够了**，不必把整个 $\mathcal{M}_\alpha$ 搬进来。

典型用法：$\mathbb{R}$ 上取 $\mathcal{E} =$ 半开区间 { (a, b] }（它生成 $\mathfrak{B}_\mathbb{R}$），于是 $\mathfrak{B}_\mathbb{R} \otimes \mathfrak{B}_\mathbb{R}$ 已经由形如 $(a, b] \times (c, d]$ 的矩形生成 —— 这正是后面 Fubini 定理要用的事实。

证明是「生成」的通用套路：两边都等于「包含 $\mathcal{F}$ 的最小 $\sigma$代数」，各自验证 $\mathcal{F} \subseteq$ 一边、另一边 $\subseteq \mathcal{F}$。

参考：Folland, Real Analysis, §2.1

#### 可数积的生成集　`prop.product-sigma-generated`
*命题*　命题：指标集可数时，积 σ-代数由「矩形」生成

若指标集 $A$ **可数**，则

$$\otimes _{\alpha \in A} \mathcal{M}_\alpha = \mathcal{M}(\{ \prod_{\alpha \in A} E_\alpha : E_\alpha \in \mathcal{M}_\alpha \})$$

即：可数积的 $\sigma$代数，恰好是由全体「矩形」生成的 $\sigma$代数。

这条确实 obvious：$A$ 可数时每个矩形都是**可数多个柱集之交**，



$$\prod_{\alpha \in A} E_\alpha = \bigcap_{\alpha \in A} \pi _\alpha^{-1}(E_\alpha)$$



而柱集本来就已经在 $\sigma$代数里了，矩形自然也就在里面；反过来柱集是矩形（其余坐标取全空间）的特例。

⚠ 该结论对**不可数**的 $A$ **不成立** —— 这就是为什么定义必须用柱集而不是矩形。

参考：Folland, Real Analysis, §2.1

#### 可数积的 Borel 代数　`cor.borel-product`
*推论*　推论：可数积距离空间的 Borel σ-代数（可分时相等）

设 $X_{1}, X_{2}$ … 是距离空间，$X = \prod_{j=1}^{\infty} X_j$ 配以积度量。则

$$\otimes _{j=1}^{\infty} \mathfrak{B}_{X_j} \subseteq \mathfrak{B}_X$$

且当每个 $X_{j}$ **可分**时，等号成立：

$$X_j\text{ 都可分} \implies \otimes _{j=1}^{\infty} \mathfrak{B}_{X_j} = \mathfrak{B}_X$$

$\subseteq$ 的原因很直接：投影 $\pi _{j}$ 连续，所以 $\pi _{j}^{-1}($开集) 是开集，那些柱集都在 $\mathfrak{B}_X$ 里。

反方向登场的又是「可分」：$X_{j}$ 可分时取可数稠密集 $C_{j}$，则



$$\{ B(c, r) : c \in C_j, r \in \mathbb{Q} \}$$



是 $X_{j}$ 的**可数**拓扑基，它已经生成 $\mathfrak{B}_\{X_{j}\}$。于是 $X$ 的拓扑基由这些基的有限积组成，仍然可数，从而 $\mathfrak{B}_X \subseteq \otimes\mathfrak{B}_\{X_{j}\}$。

⚠ 可分性不能省：$\mathbb{R}^\mathbb{R}$（不可数积）上，积 $\sigma$代数真包含于 $Borel \sigma$代数。

参考：Folland, Real Analysis, §2.1

#### 乘积测度　`def.product-measure`
*定义*　乘积测度（Product Measure $\mu \times \nu$）

设 $(X, \mathcal{M}, \mu )$ 与 $(Y, \mathcal{N}, \nu )$ 是测度空间。

**① 矩形**：形如 $A \times B$（$A \in \mathcal{M}$，$B \in \mathcal{N}$）的集合叫（可测）矩形。全体矩形**生成** $\mathcal{M} \otimes  \mathcal{N}$。

**② 矩形上的预测度**：令 $\mathcal{A}$ 为**矩形的有限不交并**全体。对

$$E = \bigsqcup_{j=1}^{n} (A_j \times B_j)$$

定义

$$\mu_{0} (E) := \sum_{j=1}^{n} \mu(A_j) \nu(B_j)$$

则 $\mu_{0}$ 是代数 $\mathcal{A}$ 上的**预测度**。

**③ 扩张**：$\mu_{0}$ 诱导 $X \times Y$ 上的外测度，限制在 $\mathcal{M} \otimes  \mathcal{N}$ 上得到一个测度，记作

$$\mu \times \nu$$

即**乘积测度**。

$\mu_{0} $ 的良定义要检查（同一个 $E$ 可以拆成不同的矩形不交并）—— 这正是要把「矩形」换成「矩形的**不交**并」的原因：不交并之下加法好验。

**$\sigma$有限的时候一切顺利**：若 $\mu$、$\nu$ 都 $\sigma$有限，则 $\mu \times \nu$ 也 $\sigma$有限，而且由 Carathéodory 唯一性，这样造出来的测度是唯一的。

⚠ 这一步的整个机器（预测度 $\to$ 外测度 $\to$ Carathéodory 扩张 $\to$ 唯一性）就是「测度的构造」那个星团里现成的四件套。

参考：Folland, Real Analysis, §2.5；Halmos, Measure Theory, §35

#### 截口　`def.section`
*定义*　截口（Section）$E_{x}$ 与 $E^{y}$

设 $E \subseteq X \times Y$。对 $x \in X$、$y \in Y$ 定义

$$E_x := \{y \in Y : (x, y) \in E\}$$
$$E^y := \{x \in X : (x, y) \in E\}$$

分别叫 $E$ 在 $x$ 处的**纵截口**与在 $y$ 处的**横截口**。

类似地，对函数 $f : X \times Y \to \mathbb{C}$ 定义

$$f_x(y) := f^y(x) := f(x, y)$$

直观：把平面图形用一根竖线（或横线）切一刀，切出来的那条线段就是截口。

截口是 Fubini 定理的语言：重积分 $\iint f d(\mu \times \nu)$ 就是「先沿截口积一次，再把各条截口的积分对另一变量积一次」。

参考：Folland, Real Analysis, §2.5

#### 截口可测　`prop.section-measurable`
*命题*　命题：可测集的截口可测，可测函数的截口可测

**(a)** 若 $E \in \mathcal{M} \otimes  \mathcal{N}$，则对一切 $x \in X$ 有 $E_x \in \mathcal{N}$，对一切 $y \in Y$ 有 $E^y \in \mathcal{M}$。

**(b)** 若 $f$ 是 $\mathcal{M} \otimes  \mathcal{N}$-可测的，则对一切 $x$ 有 $f_x$ 是 $\mathcal{N}$-可测的，对一切 $y$ 有 $f^y$ 是 $\mathcal{M}$-可测的。

证明是一个「先看矩形、再看 $\sigma$代数」的标准套路：令



$$\mathcal{R} = \{E \subseteq X \times Y : E_x \in \mathcal{N}\text{ 且} E^y \in \mathcal{M}\quad  \forall(x, y)\}$$



则 $\mathcal{R}$ 包含所有矩形，而且**$\mathcal{R}$ 是一个 $\sigma$代数**（截口运算保持并、交、补）。于是 $\mathcal{R} \supseteq \mathcal{M} \otimes \mathcal{N}$。

(b) 由 (a) 与两条恒等式得到：



$$f_x^{-1}(B) = (f^{-1}(B))_x, \quad  f^{y-1}(B) = (f^{-1}(B))^y$$



⚠ 注意 (b) 说的是「**每一个** $x$ 都行」，而 Fubini 定理里只能保证「几乎每一个」—— 那是因为 Fubini 还要它可积。

参考：Folland, Real Analysis, Prop. 2.34

#### 乘积测度由截口给出　`thm.product-measure-sections`
*定理*　定理：$\mu \times \nu(E) = \int \nu(E_{x}) d\mu(x) = \int \mu(E^{y}) d\nu(y)$

设 $(X, \mathcal{M}, \mu )$、$(Y, \mathcal{N}, \nu )$ 都是 **$\sigma$有限**的，$E \in \mathcal{M} \otimes  \mathcal{N}$。则

- $x \mapsto \nu(E_x)$ 在 $X$ 上可测；
- $y \mapsto \mu(E^y)$ 在 $Y$ 上可测；

并且

$$\mu \times \nu(E) = \int_X \nu(E_x) d\mu(x) = \int_Y \mu(E^y) d\nu(y)$$

这是 Fubini 定理的「集合版本」—— 把函数换成指示函数就是 Fubini。

证明的结构：先设 $\mu$、$\nu$ **有限**，令



$$\mathcal{C} = \{E \in \mathcal{M} \otimes  \mathcal{N} :\text{ 上面两条都成立}\}$$



- 矩形 $E = A \times B$：$\nu(E_x) = \chi_A(x) \nu(B)$，立刻成立；

$\mathcal{C}$ 对**递增并**封闭（用 MCT）；对**递减交**也封闭（用 DCT）；



于是 $\mathcal{C}$ 是一个**单调类**，含所有矩形。矩形族生成的代数由矩形构成，再由单调类定理升级到整个 $\mathcal{M} \otimes  \mathcal{N}$。

最后把「有限」推广到「$\sigma$有限」：取 $X \times Y = \bigcup (X_i \times Y_i)$，对每个 $E \cap (X_i \times Y_i)$ 用已经证好的有限情形，再用 MCT 求和。

参考：Folland, Real Analysis, Theorem 2.36

#### Fubini–Tonelli　`thm.fubini-tonelli`
*定理*　Fubini–Tonelli 定理（重积分可交换次序）

设 $(X, \mathcal{M}, \mu )$、$(Y, \mathcal{N}, \nu )$ 是 **$\sigma$有限**的测度空间。

**(a) Tonelli（非负情形，无附加条件）**：若 $f \in L^+(X \times Y)$，则

$$\int f_x d\nu \in L^+(X), \quad  \int f^y d\mu \in L^+(Y)$$

且

$$\int f d(\mu \times \nu) = \int_X ( \int_Y f(x, y) d\nu(y) ) d\mu(x) = \int_Y ( \int_X f(x, y) d\mu(x) ) d\nu(y)$$

**(b) Fubini（可积情形）**：若 $f \in L^1(\mu \times \nu)$，则

- $f_x \in L^1(\nu)$ 对 a.e. x 成立，$f^y \in L^1(\mu)$ 对 a.e. y 成立；
- $\int f_x d\nu \in L^1(\mu)$、$\int f^y d\mu \in L^1(\nu)$（都在 a.e. 意义下有定义）；
- 上面那两个三重等式同样成立。

⭐ **Tonelli 不需要任何附加条件**（非负就够了），所以实际使用时通常先拿它「试算」：如果两个累次积分里有一个算出来是有限数，那就说明 $f$ 可积，于是可以放心换序。

**Fubini 则必须假定可积** —— 否则一边是 $\infty$、一边是 $-\infty$，换序会出事。

⚠ 反例（不是可积但累次积分不等）：在 $[0,1]^{2}$ 上取 $f(x, y) = (x^2 - y^2) / (x^2 + y^2)^3$ 之类，两个累次积分会互为相反数。

⚠ $\sigma$有限不能省：在「$\mathbb{R}$ 上的计数测度 $\times Lebesgue$ 测度」这种情形下，单调类定理的论证会崩，Fubini 会得出荒谬的结论（对角线上的经典反例）。

参考：Folland, Real Analysis, Theorem 2.37

#### 完备情形的 F–T　`thm.fubini-complete`
*定理*　定理：完备化的乘积测度上，Fubini–Tonelli 仍然成立

设 $(X, \mathcal{M}, \mu )$、$(Y, \mathcal{N}, \nu )$ 都是**完备**的 $\sigma$有限测度空间，$(X \times Y, \mathcal{L}, \lambda)$ 是

$$(X \times Y, \mathcal{M} \otimes  \mathcal{N}, \mu \times \nu)$$

的**完备化**。设 $f$ 是 $\mathcal{L}$可测的。

- 若 $f \ge 0$ 或 $f \in L^1(\lambda)$：$f_x$ 对 a.e. x 是 $\mathcal{N}$可测的，$f^y$ 对 a.e. y 是 $\mathcal{M}$可测的；
- 若 $f \in L^1(\lambda)$：$f_x$、$f^y$ 对 a.e. 的 $x$、$y$ 可积；并且 $x \mapsto \int f_x d\nu$、$y \mapsto \int f^y d\mu$ 可测；
- 此时

$$\int f d\lambda = \int_X ( \int_Y f d\nu ) d\mu = \int_Y ( \int_X f d\mu ) d\nu$$

为什么需要这一条：**$\mu \times \nu$ 通常不完备**（见下一条），所以 Riesz 意义上的「可积函数」往往落在完备化 $\lambda$ 里，而不是 $\mathcal{M}\otimes\mathcal{N}$ 里。

代价是所有的断言都退化成「**对几乎处处的 x / y**」—— 因为 $\mathcal{L}$ 里多出来的那些集合只在零集上有区别。

证明的核心：先证 $f \ge 0$。若 $f = \chi _E$，$E = F \cup G$ 其中 $F \in \mathcal{M}\otimes\mathcal{N}$、$G \subseteq H$ 且 $\mu \times \nu (H) = 0$，设不交并，则 $f = \chi _F + \chi _G$。$\chi _F$ ✓（归 Fubini–Tonelli），$\chi _G$ ✓（因为每条截口的测度都是 0）。**应该是核心思想，其余都类似**。

参考：Folland, Real Analysis, Theorem 2.39

#### 乘积测度通常不完备　`prop.product-incomplete`
*命题*　注记：$\mu$、$\nu$ 完备时，$\mu \times \nu$ 常常不完备

即使 $\mu$ 与 $\nu$ 都**完备**，$\mu \times \nu$ 也**经常是不完备的**：存在 $E \in \mathcal{M} \otimes  \mathcal{N}$ 使 $\mu \times \nu(E) = 0$，但 $E$ 有子集不属于 $\mathcal{M} \otimes  \mathcal{N}$。

这就是为什么必须单独有「完备情形的 $F$–$T$」：实际用的时候（比如 $\mathbb{R}^{2}$ 上的 Lebesgue 测度）我们手里的往往是**完备化之后**的测度，而不是原始的 $\mu \times \nu$。

⚠ 容易踩的坑：$\mu$、$\nu$ 都完备时 $\mu \times \nu$ 仍然可能**不完备**。

参考：Folland, Real Analysis, §2.5

### 星团：符号测度与分解
> 造出「带符号的测度」及其结构定理：Hahn 分解 → Jordan 分解 → 全变差 → Radon–Nikodym。

#### 符号测度　`def.signed-measure`
*定义*　符号测度（Signed Measure）

设 $(X, \mathcal{M})$ 是可测空间。$\nu : \mathcal{M} \to [-\infty, +\infty]$ 是**符号测度**，当且仅当

- $\nu(\emptyset) = 0$；
- $\nu$ **至多取到 $\pm \infty$ 中的一个**（不能同时取到 $\infty$ 与 $-\infty$）；
- 对两两不交的 $\{E_j\} \subseteq \mathcal{M}$：

$$\nu( \bigsqcup_j E_j ) = \sum_j \nu(E_j),\text{ 且右边的级数绝对收敛}(\text{当} |\nu(\bigsqcup E_j)| < \infty\text{ 时})$$

⚠ 「至多取到一个无穷」这一条是**必需的**：否则可数可加性会碰上 $\infty - \infty$。

**例 1**：$\mu _{1}$、$\mu _{2}$ 是测度，其中至少一个有限 $\implies$ $\nu = \mu_1 - \mu_2$ 是符号测度。

**例 2**：$f : X \to [-\infty, +\infty]$ 可测，且 $\int f^+ d\mu$、$\int f^- d\mu$ 中至少一个有限 $\implies$



$$\nu(E) := \int_E f d\mu$$



是符号测度。这样的 $f$ 叫**广义可积函数**（extended integrable function）。

参考：Folland, Real Analysis, §3.1；Halmos, Measure Theory, §28

#### 正集 / 负集 / 零集　`def.positive-negative-null`
*定义*　正集 / 负集 / 零集（Positive, Negative, Null Set）

设 $\nu$ 是符号测度，$E \in \mathcal{M}$。

$E$ 是**正的**：$\nu(F) \ge 0$ 对一切可测 $F \subseteq E$ 成立；
$E$ 是**负的**：$\nu(F) \le 0$ 对一切可测 $F \subseteq E$ 成立；
$E$ 是**零的**：$\nu(F) = 0$ 对一切可测 $F \subseteq E$ 成立。

⚠ 注意「正集」不是「$\nu (E) > 0$ 的集合」—— 它要求 **$E$ 的每一个可测子集**都非负。

⚠ 与 $\mu$零集区分：这里的「零集」是关于符号测度 $\nu$ 说的（$\nu(F) = 0$），不是关于测度 $\mu$ 的。

参考：Folland, Real Analysis, §3.1

#### 正集的封闭性　`prop.positive-set-closure`
*命题*　命题：正集的可测子集仍是正集；可数个正集之并仍是正集

设 $\nu$ 是符号测度。

- 正集的每个可测子集都是正集；
- **可数多个正集之并仍是正集**。

第一条由定义直接得到。

第二条是 Hahn 分解证明里反复用到的技术步骤：把可数多个正集 $P_1, P_2, \ldots $ 不交化（$P_j' = P_j \setminus \bigcup_{i<j} P_i$，正集之差仍是正集），再用可数可加性逐块验证。

参考：Folland, Real Analysis, Lemma 3.1

#### Hahn 分解定理　`thm.hahn-decomposition`
*定理*　Hahn 分解定理（Hahn Decomposition Theorem）

设 $\nu$ 是 $(X, \mathcal{M})$ 上的符号测度。则存在 $P, N \in \mathcal{M}$ 使

$$P \cup N = X, \quad  P \cap N = \emptyset, $$

其中 **$P$ 是正集、$N$ 是负集**。

若 $P', N'$ 是另一对这样的集合，则 $P \triangle  P' = N \triangle  N'$ 是 $\nu$零集。

这就是「把空间按符号一刀切开」：$\nu$ 在 $P$ 上非负、在 $N$ 上非正。

⚠ 「$P \triangle P'$ 是零集」只是说分解**在零集意义下唯一** —— 严格说 Hahn 分解并不唯一（可以把零集在 $P$、$N$ 之间随意搬），但一切可测集的 $\nu$值完全相同。

⭐ 有了它，「符号测度」就完全化归成「两个真测度」—— 这正是下一条 Jordan 分解的内容。

参考：Folland, Real Analysis, Theorem 3.3；Halmos, Measure Theory, §29

#### 相互奇异　`def.mutually-singular`
*定义*　相互奇异 / 互相垂直（Mutually Singular $\mu \perp \nu$）

两个测度（或符号测度）$\mu, \nu$ **相互奇异**，记作 $\mu \perp  \nu$，当且仅当存在 $E, F \in \mathcal{M}$ 使

$$E \cap F = \emptyset, \quad  E \cup F = X, $$

且 **$E$ 是 $\mu$零集、$F$ 是 $\nu$零集**。

直观：两个测度「住在不相交的地方」—— 空间可以切成两块，一块完全没有 $\mu$ 的质量，另一块完全没有 $\nu$ 的质量。

典型例子：Lebesgue 测度与「Dirac 测度 $\delta _{0}$」相互奇异（取 $E = \mathbb{R}\setminus \{0\}$，$F = \{0\}$）；而任何绝对连续的测度与 Dirac 测度不奇异。

⚠ 与「绝对连续」是一对对偶概念：$\nu \ll  \mu$ 说「$\nu$ 的质量都在 $\mu$ 给得出质量的地方」，$\nu \perp  \mu$ 说「$\nu$ 的质量都在 $\mu$ 没有质量的地方」。

参考：Folland, Real Analysis, §3.2

#### Jordan 分解定理　`thm.jordan-decomposition`
*定理*　Jordan 分解定理（Jordan Decomposition Theorem）

设 $\nu$ 是符号测度。则存在**测度** $\mu_1, \mu_2$ 使

$$\nu = \mu_1 - \mu_2, \quad  \mu_1 \perp  \mu_2, $$

且其中**至少一个是有限的**。这样的分解是唯一的。

具体地，取 $\nu$ 的一个 Hahn 分解 $X = P \sqcup  N$，令

$$\nu^+ := \nu(\cdot \cap P), \quad  \nu^- := -\nu(\cdot \cap N)$$

则 $\nu = \nu^+ - \nu^-$ 且 $\nu^+ \perp  \nu^-$。

**正变差** $\nu^+$、**负变差** $\nu^-$ 都是真测度；两者之和叫**全变差**：



$$|\nu| := \nu^+ + \nu^-$$



⭐ 「符号测度」由此被完全拆解：任何符号测度都是一对相互奇异的测度之差。

⚠ 「至少一个有限」对应符号测度定义里那条「至多取到 $\pm \infty$ 中的一个」。

参考：Folland, Real Analysis, Theorem 3.4

#### 绝对连续　`def.absolute-continuity`
*定义*　绝对连续（Absolute Continuity $\nu \ll \mu$）

设 $\mu$ 是 $(X, \mathcal{M})$ 上的测度、$\nu$ 是符号测度。称 $\nu$ **关于 $\mu$ 绝对连续**，记作

$$\nu \ll  \mu, $$

当且仅当**每个 $\mu$零集都是 $\nu$零集**：

$$\forall E \in \mathcal{M}, \mu(E) = 0 \implies \nu(E) = 0$$

一句话：**$\mu$ 认为「没有」的地方，$\nu$ 也必须认为「没有」**。

⚠ 注意这里 $\mu (E) = 0$ 用的是 $\mu$（正测度），而 $\nu (E) = 0$ 用的是符号测度；等价说法是 $|\nu|(E) = 0$。

显然 $\mu \ll  |\mu|$ 且 $|\mu| \ll  \mu$（对测度 $\mu$ 自身而言）。

参考：Folland, Real Analysis, §3.2

#### 绝对连续与变差　`prop.ac-and-variations`
*命题*　命题：$\nu \ll \mu \iff |\nu| \ll \mu \iff \nu^{+}$、$\nu^{-} \ll \mu$；$\nu \perp \mu$ 且 $\nu \ll \mu \implies \nu = 0$

设 $\mu$ 是测度，$\nu$ 是符号测度。则

$$\nu \ll  \mu \iff |\nu| \ll  \mu \iff \nu^+ \ll  \mu\text{ 且} \nu^- \ll  \mu$$

并且：若同时有 $\nu \perp  \mu$ 与 $\nu \ll  \mu$，则 $\nu = 0$。

后半句「既奇异又绝对连续 $\implies$ 等于零」是结构定理的**起始点**：Radon–Nikodym 要说的正是「一般情形下 $\nu$ 就是这两部分之和」。

证明：若 $\nu \perp \mu$，取 $E$（$\mu$零）与 $F$（$\nu$零）划分空间；由 $\nu \ll \mu$ 得 $\nu (E) = 0$；又 $\nu (F) = 0$，故 $\nu$ 在整个 $X$ 上为 0。

参考：Folland, Real Analysis, Prop. 3.5

#### 绝对连续的 ε–δ 刻画　`thm.ac-epsilon-delta`
*定理*　定理（有限情形）：$\nu \ll \mu \iff \forall\varepsilon>0 \exists\delta>0$ ( $\mu(E)<\delta \implies |\nu(E)|\le\varepsilon$ )

设 $\nu$ 是**有限**符号测度、$\mu$ 是测度。则

$$\nu \ll  \mu \iff \forall\varepsilon > 0, \exists\delta > 0 : \mu(E) < \delta \implies |\nu(E)| \le \varepsilon$$

把「零集上为零」升级成了定量的「小测度上小值」—— 这正是绝对连续这个名字里「连续」两个字的来源。

⚠ 「$\nu$ 有限」不能省：否则 $\delta$ 卡不住（例如 $\mu = Lebesgue$ 测度、$\nu(E) = \int_E 1/x$ 这类）。

（$\Longleftarrow$）方向很直接：$\mu (E) = 0$ 时对一切 $\varepsilon$ 都有 $|\nu (E)| \le \varepsilon$，故 $\nu (E) = 0$。

参考：Folland, Real Analysis, Prop. 3.5

#### 积分给出绝对连续测度　`prop.integral-gives-ac`
*命题*　命题：$\nu(E) = \int_E f d\mu$ 关于 $\mu$ 绝对连续

设 $\mu$ 是测度，$f$ 是广义 $\mu$可积函数，定义

$$\nu(E) := \int_E f d\mu$$

则 $\nu$ 是符号测度，且 $\nu \ll  \mu$。并且

$$\nu\text{ 有限} \iff f \in L^1(\mu)$$

这是绝对连续测度的**标准来源**，也是 Radon–Nikodym 定理要反过来证明的那件事：**所有**绝对连续的 $\nu$ 都长这个样子。

记法上常写成微分形式：



$$\nu(E) = \int_E f d\mu\quad  \iff\quad  d\nu = f d\mu$$

参考：Folland, Real Analysis, §3.2

#### 积分的绝对连续性　`cor.ac-integral-continuity`
*推论*　推论：$\int_E f d\mu$ 在小测度集上任意小

设 $f \in L^1(\mu)$。则

$$\forall\varepsilon > 0, \exists\delta > 0 : \mu(E) < \delta \implies | \int_E f d\mu | < \varepsilon$$

把「积分给出绝对连续测度」与上一条 $\varepsilon$–$\delta$ 刻画拼起来即可（注意 $f \in L^{1} \implies \nu (E) = \int _E f d\mu$ 是**有限**符号测度，符合前提）。

参考：Folland, Real Analysis, Prop. 3.5

#### 要么奇异、要么有下界　`lem.singular-or-lower-bound`
*引理*　引理：两个有限测度，要么相互奇异，要么在某个正测度集上成比例

设 $\nu$、$\mu$ 都是**有限**测度。则二者必有一个成立：

- $\nu \perp  \mu$；或
- 存在 $\varepsilon > 0$ 与 $E \in \mathcal{M}$，$\mu(E) > 0$，使 $\nu \ge \varepsilon \mu$ 在 $E$ 上成立（即 $\nu(F) \ge \varepsilon \mu(F)$ 对一切可测 $F \subseteq E$）。

这是 Radon–Nikodym 证明里的**关键一步**：它提供了一个「往下顶」的 $\varepsilon$，从而可以造出那个上确界函数 $f$。

证明用的手法很典型：对每个 $n$，取 $\nu - n^{-1} \mu$ 的一个 Hahn 分解 $X = P_n \sqcup  N_n$。令



$$P = \bigcup_n P_n, \quad  N = \bigcap_n N_n$$



$N$ 是每个 $\nu - n^{-1}\mu$ 的负集，于是 $0 \le \nu(N) \le n^{-1} \mu(N)$ 对一切 $n$ 成立，令 $n \to \infty$ 得 $\nu (N) = 0$。

于是若 $\mu (P) = 0$，则 $\nu \perp \mu$（取 $E = P$、$F = N$）；若 $\mu (P) > 0$，则某个 $n$ 有 $\mu (P_{n}) > 0$，而 $P_{n}$ 是 $\nu - n^{-1}\mu$ 的正集，即 $\nu \ge n^{-1} \mu$ 在 $P_{n}$ 上成立。∎

参考：Folland, Real Analysis, Lemma 3.8

#### Lebesgue–Radon–Nikodym 定理　`thm.lebesgue-radon-nikodym`
*定理*　Lebesgue–Radon–Nikodym 定理：$\nu = \lambda + \rho$，$\lambda \perp \mu$，$\rho \ll \mu$

设 $\nu$ 是 **$\sigma$有限**符号测度、$\mu$ 是 **$\sigma$有限**正测度，都在 $(X, \mathcal{M})$ 上。则存在**唯一**的一对 $\sigma$有限符号测度 $\lambda$、$\rho$ 使

$$\lambda \perp  \mu, \quad  \rho \ll  \mu, \quad  \nu = \lambda + \rho$$

且 $\rho$ 可以写成积分：存在广义 $\mu$可积函数 $f$ 使

$$d\rho = f d\mu$$

任何两个这样的 $f$ 都在 $\mu -\text{a.e.}$ 意义下相等。

⭐ 这是整个符号测度理论的**结构定理**：任何 $\nu$ 都能唯一拆成「与 $\mu$ 奇异的部分」+「关于 $\mu$ 绝对连续的部分」。

特别地，**当 $\nu \ll \mu$ 时**，$\lambda = 0$，于是 $d\nu = f d\mu$ —— 这就是通常说的 **Radon–Nikodym 定理**。

⚠ $\sigma$有限不能省（对 $\nu$ 和 $\mu$ 都要）。

证明的三步（下一段箭头里展开）：$I. \nu$、$\mu$ 有限；II. 用 $\sigma$有限切成有限块；$III. \nu$ 是符号测度时分别对 $\nu^+, \nu^-$ 做。

参考：Folland, Real Analysis, Theorem 3.8

#### RN 导数与 Lebesgue 分解　`def.rn-derivative`
*定义*　Radon–Nikodym 导数 $d\nu/d\mu$ 与 Lebesgue 分解

设 $\nu \ll  \mu$（都是 $\sigma$有限的）。取定理里的 $f$，称

$$f = \frac{d\nu}{d\mu}$$

为 $\nu$ 关于 $\mu$ 的 **Radon–Nikodym 导数**（注意它定义在「$\mu$本质相同的函数类」上，不是单个函数）。

一般的分解 $\nu = \lambda + \rho$（$\lambda \perp  \mu$，$\rho \ll  \mu$）称为 $\nu$ 关于 $\mu$ 的 **Lebesgue 分解**。

记号的用意：$d\nu = f d\mu$ 看起来就像两个「微分」的商。

⚠ 「$\mu$本质相同」$= \mu -\text{a.e.}$ 相等 —— 这是 RN 导数唯一的**唯一性**内容：它不是一个函数，而是一个等价类。

术语提醒：「Lebesgue 分解」这个名字在两个地方出现 —— 这里指的是 $\nu$ 拆成奇异部分 + 绝对连续部分。

参考：Folland, Real Analysis, §3.2

#### RN 导数的链式法则　`prop.rn-chain-rule`
*命题*　命题：RN 导数的换元公式与链式法则

设 $\nu$ 是 $\sigma$有限符号测度、$\mu$ 与 $\lambda$ 是 $\sigma$有限测度，且

$$\nu \ll  \mu, \quad  \mu \ll  \lambda$$

**(a)** 若 $g \in L^1(\nu)$，则 $g \frac{d\nu}{d\mu} \in L^1(\mu)$，且

$$\int g d\nu = \int g \frac{d\nu}{d\mu} d\mu$$

**(b)** 此时 $\nu \ll  \lambda$，且**链式法则**成立：

$$\frac{d\nu}{d\lambda} = \frac{d\nu}{d\mu} \cdot \frac{d\mu}{d\lambda}\quad  (\lambda-\text{a.e.})$$

(a) 就是「换元公式」：把对 $\nu$ 的积分换成对 $\mu$ 的积分，代价是乘上 RN 导数。它对指示函数成立、于是对简单函数成立、再用单调收敛到 $L^{+}$、最后到 $L^{1}(\nu )$。

(b) 的证明用 (a)：对任意可测 $E$，



$$\nu(E) = \int_E \frac{d\nu}{d\mu} d\mu = \int_E \frac{d\nu}{d\mu} \cdot \frac{d\mu}{d\lambda} d\lambda$$



两边对照 $\nu(E) = \int_E \frac{d\nu}{d\lambda} d\lambda$ 即得（「用积分识别函数」那条命题正是用来做这一步的）。

参考：Folland, Real Analysis, Theorem 3.9

#### 互为绝对连续时导数互逆　`cor.rn-inverse`
*推论*　推论：$\mu \ll \lambda$ 且 $\lambda \ll \mu \implies (d\mu/d\lambda)(d\lambda/d\mu) = 1$

若 $\mu \ll  \lambda$ 且 $\lambda \ll  \mu$（两个 $\sigma$有限测度互为绝对连续），则

$$\frac{d\mu}{d\lambda} \cdot \frac{d\lambda}{d\mu} = 1\quad  \text{a.e.}$$

两条链式法则一拼：$d\mu / d\mu = \frac{d\mu}{d\lambda}\cdot\frac{d\lambda}{d\mu}$，而 $d\mu / d\mu \equiv  1$。

参考：Folland, Real Analysis, Theorem 3.9

#### 复测度　`def.complex-measure`
*定义*　复测度（Complex Measure）

可测空间 $(X, \mathcal{M})$ 上的**复测度**是一个映射

$$\nu : \mathcal{M} \to \mathbb{C}$$

满足

$$\nu(\emptyset) = 0, $$

且对两两不交的 $\{E_j\} \subseteq \mathcal{M}$：

$$\nu( \bigsqcup_j E_j ) = \sum_j \nu(E_j),\text{ 右边的级数绝对收敛}$$

⚠ 与符号测度相比，复测度**自动有限**（取值在 $\mathbb{C}$ 里，不涉及 $\pm \infty$），而且可数可加性里的那个级数**自动绝对收敛**。

所以在复测度的世界里，「有限性」「重排问题」这些麻烦全部消失 —— 代价是不能再有「无穷质量」的例子。

参考：Folland, Real Analysis, §3.3

#### 复测度的 Radon–Nikodym　`thm.rn-complex`
*定理*　定理：复测度的 $\nu = \lambda + f d\mu$ 分解

设 $\nu$ 是复测度、$\mu$ 是 **$\sigma$有限**测度。则存在复测度 $\lambda$ 与 $f \in L^1(\mu)$ 使

$$d\nu = d\lambda + f d\mu, \quad  \lambda \perp  \mu, $$

且在 a.e. 意义下唯一。

复测度可以拆成实部与虚部、各自再用符号测度的版本 —— 这是把上一套结论搬到复情形的标准做法。

⚠ 这里 $f \in L^1(\mu)$ 而不再是「广义可积」：因为复测度有限，$f$ 必须真可积。

参考：Folland, Real Analysis, Theorem 3.11

#### 全变差的基本性质　`prop.total-variation-basics`
*命题*　命题：$|\nu(E)| \le |\nu|(E)$，且 $d|\nu| = |f| d\mu$

设 $\nu$ 是复测度（或符号测度），$|\nu|$ 是它的全变差。则

**(a)** $|\nu(E)| \le |\nu|(E)$ 对一切 $E \in \mathcal{M}$ 成立；

**(b)** 若 $d\nu = f d\mu$（即 $\nu \ll \mu$）则 $d|\nu| = |f| d\mu$，即

$$|\nu|(E) = \int_E |f| d\mu$$

(b) 的证法：先取 $\rho = |\nu_1| + |\nu_2|$ 把 $\nu$ 的两个不同表示拉到一个共同的「基准测度」上，再用 Radon–Nikodym 与链式法则把两个密度都换到 $\rho$ 上。于是要证的就是



$$|f_1| \frac{d\mu_1}{d\rho} = |f_2| \frac{d\mu_2}{d\rho}\quad  \rho-\text{a.e.}$$



从而 $|f_1| d\mu_1 = |f_2| d\mu_2$ —— 说明全变差的密度与「用哪个 $\mu$ 表示 $\nu$」无关。

由此也得到一个实用的直觉：**全变差就是「把质量取绝对值之后再测一遍」**。

参考：Folland, Real Analysis, §3.3；Rudin, Real and Complex Analysis, Ch. 6

### 星团：微分定理
> 造出「逐点求导」这套工具：覆盖引理 → 极大函数 → Lebesgue 微分定理 → RN 导数的点态公式。

#### L¹(ν) 与全变差　`prop.L1-signed`
*命题*　命题：符号测度的 $L^{1}(\nu) = L^{1}(|\nu|)$，以及几条基本不等式

设 $\nu$ 是符号测度或复测度。

**(a)** $\nu \ll  |\nu|$，并且

$$| d\nu / d|\nu| | = 1\quad  |\nu|-\text{a.e.}$$

**(b)** 定义 $L^1(\nu) := L^1(|\nu|)$。若 $f \in L^1(\nu)$，则

$$| \int f d\nu | \le \int |f| d|\nu|$$

**(c)** $|\nu_1 + \nu_2| \le |\nu_1| + |\nu_2|$（即全变差满足三角不等式）。

(a) 的来源：$d\nu = g\cdot d|\nu|$ 对某个 $g$ 成立（Radon–Nikodym），且 $|g| = 1 \text{a.e.}$ —— 因为全变差本来就是「把质量取绝对值」得到的。

(b) 说明**积分理论对符号测度不需要重写**：把 $|\nu |$ 当作底层的真测度，一切照旧。

(c) 让「全变差」成为一个范数，这正是把测度空间看作 Banach 空间的起点。

参考：Folland, Real Analysis, §3.3

#### 覆盖引理　`lem.covering`
*引理*　覆盖引理：开球族里能挑出不交子族，三倍膨胀仍覆盖

设 $\mathcal{E}$ 是一族 $\mathbb{R}^{n}$ 中的开球，$U = \bigcup\mathcal{E}$。若 $c < m(U)$，则存在 $\mathcal{E}$ 中**两两不交**的球 $B_1, \ldots , B_k$ 使

$$\sum_{j=1}^{k} m(B_j) > 3^{-n} c$$

这是 **Vitali 型覆盖引理**的核心估计，极大定理全靠它。

证明的挑法：先取**半径最大**的球 $B_1$；再取与 $B_1$ 不交的、半径最大的球 $B_2$；依此类推。

为什么这样挑就够了：若某个 $A_i \in \mathcal{E}$ 没被取到，则必有某个 $B_j$ 与它相交 —— 取**下标最小**的那个 $B_j$。由挑选规则，$A_i$ 的半径不超过 $B_j$ 的半径（否则取 $B_j$ 时就会取到 $A_i$ 了）。把 $B_j$ 的半径放大 3 倍，就有 $A_i \subseteq 3B_j$，于是 $K \subseteq \bigcup_j 3B_j$。

剩下的就是计数：



$$c < m(K) \le 3^n \sum_j m(B_j)\quad  \implies\quad  \sum_j m(B_j) > 3^{-n} c$$



⚠ 注意膨胀因子是 **$3^{n}$**（而不是 $2^{n}$）—— 这正是因为「半径不超过」是弱不等式，需要一点余量。

参考：Folland, Real Analysis, Lemma 3.15

#### 局部可积　`def.locally-integrable`
*定义*　局部可积函数 $L^{1}_{\text{loc}}$

可测函数 $f : \mathbb{R}^n \to \mathbb{C}$ 是**局部可积的**，当且仅当

$$\int_K |f(x)| dx < \infty\quad \text{ 对每个有界可测集} K \subseteq \mathbb{R}^n$$

局部可积函数全体记作 $L^1_{loc}$（或 $L^1_{loc}(\mathbb{R}^n)$）。

直觉：$f$ 可能「在无穷远处爆掉」，但在每个有限范围里都还好。

例：常函数 1 属于 $L^{1}_{l}oc$ 但不属于 $L^{1}(\mathbb{R}^{n})$；$1/|x|$ 在 $\mathbb{R}^{n}$ 上属于 $L^{1}_{l}oc$（$n \ge 2$ 时不属于 $L^{1}$）。

⚠ 微分理论里必须是 $L^{1}_{l}oc$ 而不是 $L^{1}$：因为讨论的是**逐点**行为，而局部信息就够。

参考：Folland, Real Analysis, §3.4

#### 平均算子 Aᵣ　`def.average-operator`
*定义*　平均算子（Averaging Operator $A_{r} f$）

设 $f \in L^1_{loc}$，$x \in \mathbb{R}^n$，$r > 0$。定义

$$A_r f(x) := \frac{1}{m(B(r, x))} \int_{B(r, x)} f(y) dy$$

即 $f$ 在以 $x$ 为心、$r$ 为半径的球上的**平均值**。

这是「把函数抹平」的算子：$A_r f$ 是 $f$ 的连续化版本（见下一条），$r \to 0$ 时应当回到 $f$ 本身 —— 而那正是 Lebesgue 微分定理要说的事。

⚠ 注意积分是**对 Lebesgue 测度 $m$** 取的，跟这一段的符号测度 $\nu$ 无关。

参考：Folland, Real Analysis, §3.4

#### 平均算子联合连续　`lem.average-continuous`
*引理*　引理：$A_{r} f(x)$ 关于 (r, x) 联合连续

设 $f \in L^1_{loc}$。则 $A_r f(x)$ 作为 $(r, x)$ 的函数是**联合连续**的。

证明的骨架：把积分写成



$$\int_{B(r, x)} f(y) dy = \int_{\mathbb{R}^n} \chi_{B(r, x)}(y) f(y) dy$$



于是只需证 $\chi_{B(r,x)} \to \chi_{B(r_0,x_0)}$（当 $(r,x) \to (r_0,x_0)$）在足够好的意义上成立，再用 DCT。

分两块看（取目标点 $(r_0, x_0)$）：



$\cdot$ 若 $y$ 在球内：$\varepsilon := r_0 - |y - x_0| > 0$；当 $|x - x_0| < \varepsilon/2$ 且 $|r - r_0| < \varepsilon/2$ 时 $|y - x| < r$，故 $\chi = 1$；

$\cdot$ 若 $y$ 在球外：$\varepsilon := |y - x_0| - r_0 > 0$；同样的小扰动下 $|y - x| > r$，故 $\chi = 0$。



两边合起来说明：对**几乎处处的** $y$（只排除球面），特征函数最终稳定 —— 即逐点收敛 a.e.。

控制函数取 $\chi_{B(r_0+1, x_0)}(y)\cdot|f(y)| \in L^1$，由 **DCT** 得连续性。∎

参考：Folland, Real Analysis, Lemma 3.16

#### 极大函数　`def.maximal-function`
*定义*　Hardy–Littlewood 极大函数 Hf

设 $f \in L^1_{loc}$。定义

$$Hf(x) := \sup_{r > 0} \frac{1}{m(B(r, x))} \int_{B(r, x)} |f(y)| dy = \sup_{r > 0} A_r |f|(x)$$

称为 $f$ 的 **Hardy–Littlewood 极大函数**。

直觉：$Hf(x)$ 是「$f$ 在 $x$ 附近所有尺度上的平均值里最大的那个」。

它当然比 $f$ 大（$Hf \ge |f|$ a.e.，因为可以取 $r \to 0$），但好处是它**可测**：对每个固定的 $r$，$x \mapsto A_r|f|(x)$ 可测（由联合连续性更强），而可数个可测函数的上确界仍可测。

⭐ 极大函数是微分理论里的「万能控制函数」：它把一个逐点问题化归成一个关于测度的估计问题，而那个估计就是下一条的极大不等式。

参考：Folland, Real Analysis, §3.4

#### 极大定理　`thm.maximal-theorem`
*定理*　极大定理（弱 (1,1) 不等式）

存在常数 $C > 0$（只依赖维数 $n$），使对一切 $f \in L^1$ 与一切 $\alpha > 0$：

$$m(\{x : Hf(x) > \alpha\}) \le (C/\alpha)\cdot\int |f(x)| dx$$

这叫**弱 (1,1) 型**不等式：不能保证 $Hf \in L^1$（事实上一般不是），但能保证它的**分布函数**被 $1/\alpha$ 控制。

在 $\mathbb{R}^{n}$ 里 $C = 3^n$（这正是覆盖引理里那个膨胀因子）。

⭐ 它的角色：**「平均值的例外集是小的」** —— 于是一切逐点收敛问题都可以用「例外集测度 $\to 0$」来解决。

参考：Folland, Real Analysis, Theorem 3.17

#### Lebesgue 微分定理　`thm.lebesgue-differentiation`
*定理*　Lebesgue 微分定理：$A_{r} f(x) \to f(x) \text{a.e.}$

设 $f \in L^1_{loc}$。则

$$\lim_{r\to0} A_r f(x) = f(x)\quad \text{ 对} \text{a.e.} x \in \mathbb{R}^n$$

⭐ 一句话：**可积函数几乎处处等于自己局部平均值的极限**。

这也是「Lebesgue 积分比 Riemann 积分好」最直观的一条：Riemann 可积函数的连续性几乎处处成立，而这里连「连续」都不需要。

证明的三段（下一条箭头里展开）：先用连续函数逼近 $\to$ 再用极大定理把「坏集」压成零测。

参考：Folland, Real Analysis, Theorem 3.18

#### Lebesgue 集　`def.lebesgue-set`
*定义*　Lebesgue 集 $L_f$

设 $f \in L^1_{loc}$。定义

$$L_f := \{ x : \lim_{r\to0} \frac{1}{m(B(r, x))} \int_{B(r, x)} |f(y) - f(x)| dy = 0 \}$$

称为 $f$ 的 **Lebesgue 集**。

⚠ 注意定义里积的是 $|f(y) - f(x)|$（与 $f$ 在该点的值比较），不是 $|f(y)|$。

这么定义是为了让「可缩族」版本（下一条定理）能直接用 —— 那里需要的是**局部一致逼近**，而不是简单的平均值收敛。

$x \in L_f$ 常被说成「$x$ 是 $f$ 的 Lebesgue 点」。直觉：在这个点附近，$f$ 的振荡在平均意义下趋于 0。

参考：Folland, Real Analysis, §3.4

#### Lebesgue 集几乎处处　`thm.lebesgue-set-full`
*定理*　定理：$f \in L^{1}_{\text{loc}} \implies m(L_f^{c}) = 0$

若 $f \in L^1_{loc}$，则

$$m(L_f^c) = 0$$

即：**几乎每个点都是 Lebesgue 点**。

证明的思路很巧：对每个复数 $c$，把微分定理用在函数 $|f(x) - c|$ 上，得到「除一个零集 $E_c$ 外，$\lim_{1/m(B)}\int|f(y) - c|dy = |f(x) - c|$」。

然后取 **$\mathbb{C}$ 的一个可数稠密子集 $D$**，令 $E = \bigcup_{c \in D} E_c$（可数并仍是零集）。对 $x \notin E$ 与任意 $\varepsilon > 0$，取 $c \in D$ 使 $|f(x) - c| < \varepsilon$，于是



$$\lim_{r\to0} \frac{1}{m(B(r,x))} \int_{B(r,x)} |f(y) - f(x)| dy \le |f(x) - c| + \varepsilon < 2\varepsilon$$



令 $\varepsilon \to 0$ 即得。∎

⭐ 「取一个可数稠密子集」这一步是可数性技巧的典型用法：把不可数多个条件化归成可数多个零集之并。

参考：Folland, Real Analysis, Theorem 3.20

#### 可缩族　`def.shrinks-nicely`
*定义*　可缩地趋于 x（Shrinks Nicely）

$\mathbb{R}^n$ 的一族 Borel 子集 $\{E_r\}_{r > 0}$ 叫**可缩地趋于 $x$**，当且仅当

$\cdot$ $E_r \subseteq B(r, x)$ 对每个 $r$ 成立；
$\cdot$ 存在 $\alpha > 0$，使 $m(E_r) > \alpha\cdot m(B(r, x))$ 对一切 $r$ 成立。

两个条件的含义：**装得进去**（$E_r$ 在球里）、**不能太瘪**（体积至少是球的 $\alpha$ 倍）。

典型例子：取 $E_r = B(r, x)$ 本身（$\alpha = 1$）；或取 $E_r$ 为球内某个固定形状（如立方体）按比例缩放。

反例：$E_r$ 取成球内一条细长的薄片 —— 体积比可以趋于 0，这样的族就不是「可缩地」趋于 $x$。

⭐ 引入这个概念是为了让微分定理**不依赖球的形状**：只要不瘪，结论照旧。

参考：Folland, Real Analysis, §3.4

#### 可缩族的微分定理　`thm.differentiation-general`
*定理*　定理：对可缩族，Lebesgue 微分定理仍然成立

设 $f \in L^1_{loc}$，$x \in L_f$。则对**每一个**可缩地趋于 $x$ 的族 $\{E_r\}_{r>0}$：

$$\lim_{r\to0} \frac{1}{m(E_r)} \int_{E_r} |f(y) - f(x)| dy = 0, $$
$$\lim_{r\to0} \frac{1}{m(E_r)} \int_{E_r} f(y) dy = f(x)$$

证明是一行估计：由 $E_r \subseteq B(r,x)$ 与 $m(E_r) > \alpha m(B(r,x))$，



$$\frac{1}{m(E_r)} \int_{E_r} |f - f(x)| \le \frac{1}{m(E_r)} \int_{B(r,x)} |f - f(x)| \le (1/\alpha)\cdot m(B(r,x)) \int_{B(r,x)} |f - f(x)|$$



而最右边由「$x \in L_f$」趋于 0。∎

⭐ 全部难度都在把 L_f 的定义选对（用 $|f(y) - f(x)|$ 而不是 $|f(y)|$）—— 选对之后这一步就是白送的。

参考：Folland, Real Analysis, Theorem 3.21

#### 正则 Borel 测度　`def.regular-measure`
*定义*　正则 Borel 测度（Regular Borel Measure）

$\mathbb{R}^{n}$ 上的 Borel 测度 $\nu$ 是**正则的**，当且仅当

$\cdot$ $\nu(K) < \infty$ 对每个紧集 $K$ 成立；
$\cdot$ $\nu(E) = \inf\{ \nu(U) : U\text{ 开}, E \subseteq U \}$ 对每个 $E \in \mathfrak{B}_{\mathbb{R}^n}$ 成立（**外正则**）。

符号测度或复测度 $\nu$ 叫正则 $\iff$ $|\nu|$ 正则。

第二条是「从外面用开集逼近」。在 $\mathbb{R}^{n}$ 上它其实由第一条推出。

**每个正则测度都是 $\sigma$有限的**（用紧集的可数覆盖）。

$f \in L^+(\mathbb{R}^n)$ 时，$f\cdot dm$ 正则 $\iff$ $f \in L^1_{loc}$ —— 这条把「正则」与「局部可积」接了起来。

参考：Folland, Real Analysis, §7.2

#### RN 导数的点态公式　`thm.rn-pointwise`
*定理*　定理：$\nu(E_{r})/m(E_{r}) \to f(x) \text{a.e.}$，其中 $d\nu = d\lambda + f dm$

设 $\nu$ 是 $\mathbb{R}^{n}$ 上的**正则**符号/复 Borel 测度，$d\nu = d\lambda + f\cdot dm$ 是它关于 Lebesgue 测度 $m$ 的 Lebesgue–Radon–Nikodym 表示。则对 **m-a.e.** 的 $x \in \mathbb{R}^n$，

$$\lim_{r\to0} \nu(E_r) / m(E_r) = f(x)$$

对**每一个**可缩地趋于 $x$ 的族 $\{E_r\}_{r>0}$ 成立。

⭐ 这条定理把 Radon–Nikodym 导数从「抽象的存在物」变成了**可以逐点算出来的极限**：



$$f(x) = \lim_{r\to0} \nu(B(r, x)) / m(B(r, x))$$



这正是微积分里「密度 $=$ 质量 / 体积」的严格版本，也是「RN 导数是导数的推广」这一说法的根据。

证明的思路：先验证 $d|\nu| = d|\lambda| + |f| dm$，于是 $\lambda$ 与 f dm 都正则、特别地 $f \in L^1_{loc}$；把比值拆成



$$\nu(E_r) / m(E_r) = \lambda(E_r) / m(E_r) + \frac{1}{m(E_r)} \int_{E_r} f\cdot dm$$



第二项由微分定理趋于 f(x)。第一项要证它是 0，用一个「分块 + 覆盖引理 $\lambda (A) = m(A^{c}) = 0$」的论证把坏集压成零测。

参考：Folland, Real Analysis, Theorem 3.22

### 星团：有界变差与绝对连续
> 造出「测度 ↔ 函数」的字典：全变差 → BV 的 Jordan 分解 → NBV 与 Borel 测度一一对应 → 微积分基本定理。

#### 单调函数几乎处处可导　`thm.monotone-differentiable`
*定理*　定理：单调函数几乎处处可导，且不连续点可数

设 $F : \mathbb{R} \to \mathbb{R}$ 递增，$G(x) := F(x+)$（右极限）。则

**(a)** $F$ 的不连续点至多可数；

**(b)** $F$ 与 $G$ 都 **a.e. 可导**，且

$$F' = G'\quad  \text{a.e.}$$

(a)：每个不连续点 $x$ 对应一个「跳跃区间」$(F(x-), F(x+))$，这些区间两两不交；每个区间里取一个有理数，得到一个到 $\mathbb{Q}$ 的单射。故不连续点至多可数。

(b) 的路线很漂亮：$G$ 右连续递增，于是它诱导一个正则 Borel 测度 $\mu _G$。对 $h > 0$ 有



$$G(x+h) - G(x) = \mu_G((x, x+h])$$



于是差商恰好是 $\mu_G(E_h)/m(E_h)$ —— 其中 $E_h = (x, x+h]$ 是一个**可缩族**。由 RN 导数的点态公式（见「$\mathbb{R}^{n}$ 上的微分」），这个比值 a.e. 收敛到 $\mu _G$ 关于 $m$ 的 RN 导数，即 $G' \text{a.e.}$ 存在。

剩下的部分用一个「夹逼」把 $F' = G'$ 也拿下：令 $H = G - F \ge 0$（跳跃函数），它 a.e. 为 0；再令 $\bar{F}$ 为跳跃的累积函数，则 $\mu _{\bar{F}}$ 集中在可数集上，故 $\mu _{\bar{F}} \perp m$，于是 $\bar{F}' = 0 \text{a.e.}$。在 $\bar{F}' = 0$ 的点上用



$$0 \le H(x+h) / h \le (\bar{F}(x+h) - \bar{F}(x)) / h\quad  (h > 0)$$



夹逼即得 $H' = 0 \text{a.e.}$，故 $F' = G' \text{a.e.}$∎

参考：Folland, Real Analysis, Theorem 3.23

#### 有界变差 BV　`def.bounded-variation`
*定义*　全变差与有界变差函数（Total Variation, BV）

设 $F : \mathbb{R} \to \mathbb{C}$。定义它的**全变差函数**

$$T_F(x) := \sup \{ \sum_{j=1}^{n} |F(x_j) - F(x_{j-1})| : n \in \mathbb{N}, -\infty < x_0 < \cdots < x_n = x \}$$

$T_F$ 是递增的 $\mathbb{R} \to [0, +\infty]$。若 $T_F(+\infty) < +\infty$，称 $F$ 是**有界变差的**，这类函数全体记作 **BV**。

$T_F(b) - T_F(a)$ 称为 $F$ 在 $[a, b]$ 上的全变差；$[a,b]$ 上有界变差的函数全体记作 $BV([a, b])$。

直观：$T_F(x)$ 是「沿着图像从 $-\infty$ 走到 $x$ 所走过的总路程」。有界变差就是「走过的路有限」。

两个自然的映射：**投射** $BV \to BV([a,b])$，$f \mapsto f|_{[a,b]}$；**嵌入** $BV([a,b]) \to BV$，$f \mapsto \{ f(x) (x \in [a,b]); f(b) (x > b); f(a) (x < a) \}$。

⚠ 全变差用的是**每一段的绝对差之和**，所以振荡太厉害的（比如 $x \sin(1/x)$ 在 0 附近）就要仔细算 —— 见例子节点。

参考：Folland, Real Analysis, §3.5；Rudin, Real and Complex Analysis, Ch. 7

#### BV 的例子与基本性质　`prop.bv-examples`
*命题*　命题：BV 的几个例子与封闭性

1. 若 $F : \mathbb{R} \to \mathbb{R}$ **有界递增**，则 $F \in BV$（此时 $T_F = F - F(-\infty)$）。

2. $BV$ 是 $\mathbb{C}$向量空间。

3. 若 $F$ 实可微且 $F'$ 有界，则对一切 $-\infty < a < b < \infty$ 有 $F \in BV([a,b])$。

4. $F(x) = \sin x$：对任何紧区间 $[a,b]$，$F \in BV([a,b])$。

5. $F(x) = xsin(1/x)$（$x \ne 0$），$F(0) = 0$：若 $0 \in [a,b]$，则 $F \in BV([a,b])$。

第 4、5 两个例子是「振荡型」的：函数本身有界、但导数在某个点附近爆掉或无限振荡。它们仍然有界变差 —— 说明**BV 比「$C^{1}$」宽得多**。

一个标准的**反例**（不属于 BV）：$F(x) = \sin(1/x)$（$x \ne 0$）、$F(0) = 0$ —— 它在 0 附近无限次振荡且振幅不衰减，全变差发散。

⭐ 记住这条分界线：**振幅不衰减的振荡 $\implies$ 不是 BV**。

参考：Folland, Real Analysis, §3.5

#### T_F ± F 递增　`lem.variation-monotone`
*引理*　引理：实值 BV 函数的 $T_F + F$ 与 $T_F - F$ 都递增

设 $F$ 是**实值**有界变差函数。则

$$T_F + F\quad \text{ 与}\quad  T_F - F$$

都是**递增**函数。

证明：设 $x < y$，任给 $\varepsilon > 0$，取分划 $x_0 < \cdots < x_n = x$ 使 $\sum|F(x_j) - F(x_{j-1})| \ge T_F(x) - \varepsilon$，再补上点 $y$ 与 $x$ 之间的比较：



$$T_F(y) \pm  F(y) \ge \sum_j |F(x_j) - F(x_{j-1})| + (F(y) - F(x)) \pm  F(x) \ge T_F(x) - \varepsilon \pm  F(x)$$



由 $\varepsilon$ 任意即得 $T_F(y) \pm  F(y) \ge T_F(x) \pm  F(x)$。∎

⭐ 这条是下一条「BV 的 Jordan 分解」的全部技术内容：一旦知道 $T_F \pm  F$ 递增，就能把 $F$ 写成一增一减。

参考：Folland, Real Analysis, Theorem 3.27

#### BV 的 Jordan 分解　`thm.bv-jordan`
*定理*　定理：$F \in BV \iff F = G - H$（G、H 有界递增）

**(a)** $F \in BV \iff \operatorname{Re} F \in BV\text{ 且} \operatorname{Im} F \in BV$。

**(b)** 设 $F : \mathbb{R} \to \mathbb{R}$。则

$$F \in BV \iff F = G - H,\text{ 其中} G, H\text{ 都是有界递增函数}$$

具体取法（就是测度论 Jordan 分解的函数版）：



$$F = (1/2)(T_F + F) - (1/2)(T_F - F)$$



前一项叫 $F$ 的**正变差**，后一项叫**负变差** —— 名字与符号测度的 $\nu ^{+}$、$\nu ^{-}$ 完全对应。

由引理，$T_F \pm  F$ 递增；而「有界」来自 $F \in BV$。

⭐ 意义：**BV 函数 $=$ 两个有界递增函数之差**。于是关于 BV 的一切都能化归到「递增函数」这个好处理的情形。

参考：Folland, Real Analysis, Theorem 3.27

#### BV 函数的正则性　`prop.bv-regularity`
*命题*　命题：BV 函数的单侧极限都存在、不连续点可数、a.e. 可导

设 $F \in BV$。则

**(c)** 对每个 $x \in \mathbb{R}$，$F(x+)$ 与 $F(x-)$ 都存在；$F(\pm \infty)$ 也存在；

**(d)** $F$ 的不连续点至多可数；

**(e)** 令 $G(x) = F(x+)$，则 $F'$ 与 $G'$ 处处存在且相等（a.e.）。

全部由「$F = G - H$」化归到递增函数：递增函数的单侧极限显然存在；不连续点可数由单调函数那条定理；a.e. 可导也由那条定理（差的导数 $=$ 导数的差）。

⭐ 所以 BV 函数虽然可能很不光滑，但**结构上非常驯服**：只有可数多个跳跃，其余地方都「几乎处处可导」。

参考：Folland, Real Analysis, Theorem 3.27

#### NBV　`def.nbv`
*定义*　NBV：右连续且 $F(-\infty) = 0$ 的有界变差函数

$$NBV := \{ F \in BV : F\text{ 右连续},\text{ 且} F(-\infty) = 0 \}$$

为什么要加这两个条件：因为下一条定理要建立**$\mathbb{R}$ 上的复 Borel 测度 $\leftrightarrow NBV$** 的一一对应，而对应式是



$$F(x) = \mu((-\infty, x])$$



右边那个函数自动右连续、且在 $-\infty$ 处为 0。把左边限制成 NBV，对应才是**双射**而不是满射。

参考：Folland, Real Analysis, Theorem 3.29

#### 全变差的 NBV 性质　`lem.nbv-variation`
*引理*　引理：$T_F(-\infty) = 0$；F 右连续 $\implies T_F$ 右连续

设 $F \in BV$。则

- $T_F(-\infty) = 0$；
- 若 $F$ **右连续**，则 $T_F$ 也右连续。

第一部分：给定 $\varepsilon > 0$ 与 $x$，取分划使 $\sum \ge T_F(x) - \varepsilon$；于是对 $y \le x_0$ 有 $T_F(y) \le \varepsilon$。由 $\varepsilon$ 任意，$T_F(-\infty) = 0$。

第二部分：设 $\alpha = T_F(x+) - T_F(x)$。由 $F$ 右连续，对充分小的 $h$ 有 $|F(x+h) - F(x)| < \varepsilon$ 且 $T_F(x+h) - T_F(x+) < \varepsilon$；再从两边各取分划夹住，得到



$$(3/2)\alpha - \varepsilon \le T_F(x+h) - T_F(x) < \varepsilon + \alpha$$



于是 $\alpha < 4\varepsilon$，由 $\varepsilon$ 任意得 $\alpha = 0$。∎

⭐ 这条保证「全变差」这个操作**保持 NBV**：$F \in NBV \implies T_F \in NBV$，正是下一条定理里 $|\mu _F| = \mu _\{T_F\}$ 的根据。

参考：Folland, Real Analysis, Lemma 3.30

#### 递增函数的导数积分不等式　`prop.monotone-integral-derivative`
*命题*　命题：$\int_{a}^{b} F' \le F(b) - F(a)$

设 $F \nearrow $ 递增，$G(x) = F(x+)$（右连续递增）。则

$$\int_a^b F' \le F(b) - F(a)$$

证明：$G$ 右连续递增，诱导一个正则 Borel 测度 $\mu _G$。写它的 Lebesgue–Radon–Nikodym 分解



$$d\mu_G = d\lambda + f\cdot dm, \quad  f = \lim \mu_G(E_h) / m(E_h)\quad  \text{a.e.}$$



而差商恰好是那个比值，所以 $f = G' = F'$ a.e.。于是



$$\int_a^b F' = \int_a^b f\cdot dm \le \int_a^b d\mu_G = G(b) - G(a) \le F(b) - F(a)$$



（中间那个不等号是因为省略了奇异的 $\lambda \ge 0$。）∎

⚠ **这里一般不是等号**：Cantor 函数是经典反例 —— 它递增、连续、导数 a.e. 为 0，所以左边 $= 0$ 但右边 $= 1$。这个差别正是「绝对连续」这个概念要补上的东西。

参考：Folland, Real Analysis, Theorem 3.28

#### 测度 ↔ NBV 的一一对应　`thm.borel-measure-nbv`
*定理*　定理：$\mathbb{R}$ 上的复 Borel 测度 $\longleftrightarrow$ NBV 函数

**(1)** 若 $\mu$ 是 $\mathbb{R}$ 上的复 Borel 测度，$F(x) := \mu((-\infty, x])$，则 $F \in NBV$。

**(2)** 反之，若 $F \in NBV$，则存在**唯一**的复 Borel 测度 $\mu_F$ 使

$$F(x) = \mu_F((-\infty, x])$$

而且

$$|\mu_F| = \mu_{T_F}$$

这是 **Riesz 表示定理**在实数轴上的形式：测度与一类函数一一对应。

证明思路：把复测度拆成四个正测度 $\mu = \mu_1^+ - \mu_1^- + i(\mu_2^+ - \mu_2^-)$，各取 $F_j^{\pm }(x) = \mu_j^{\pm }((-\infty, x])$ —— 它们递增、右连续、在 $-\infty$ 处为 0、在 $\infty$ 处有限，于是 $F \in NBV$。反方向把 $F \in NBV$ 拆成 $F_1^+ - F_1^- + i(F_2^+ - F_2^-)$，每一块配一个测度。

$|\mu_F| = \mu_{T_F}$ 这一条说的是：**取全变差（函数侧）与取全变差（测度侧）是同一件事** —— 这也正是引理「$T_F \in NBV$」的用处。

参考：Folland, Real Analysis, Theorem 3.29

#### NBV 函数的导数与测度的关系　`prop.nbv-derivative`
*命题*　命题：$\mu_F \perp m \iff F' = 0 \text{a.e.}$；$\mu_F \ll m \iff F(x) = \int_{-\infty}^{x} F'$

设 $F \in NBV$。则 $F' \in L^1(m)$，并且

$$\mu_F \perp  m \iff F' = 0\quad  \text{a.e.}$$
$$\mu_F \ll  m \iff F(x) = \int_{-\infty}^{x} F'(t) dt$$

证明：写 $d\mu_F = d\lambda + f\cdot dm$（Lebesgue 分解），由测度那条定理 $f = F'$ a.e.。于是



$\cdot$ $\mu_F \perp  m$ 意味着绝对连续部为零，即 $f = 0 \implies F' = 0 \text{a.e.}$；

$\cdot$ $\mu_F \ll  m$ 意味着 $\lambda = 0$，于是 $F(x) = \mu_F((-\infty,x]) = \int_{-\infty}^x f\cdot dm = \int_{-\infty}^x F'\cdot dt$。

⭐ 这一条就是「微积分基本定理」的测度版：**能不能把函数积回来，取决于 $\mu _F$ 是否绝对连续**。

参考：Folland, Real Analysis, Theorem 3.35

#### 绝对连续函数　`def.ac-function`
*定义*　绝对连续函数 AC（Absolutely Continuous Function）

函数 $F : [a, b] \to \mathbb{C}$ 是**绝对连续的**，当且仅当

$$\forall\varepsilon > 0, \exists\delta > 0 :\text{ 任意有限个两两不交的区间} (a_j, b_j) \subseteq [a, b]\text{ 满足} \sum(b_j - a_j) < \delta,\text{ 就一定有} \sum|F(b_j) - F(a_j)| < \varepsilon$$

⚠ 注意与「一致连续」的区别：一致连续是**单个**小区间上控制振幅，而绝对连续要求**任意多个小区间合起来**也能控制 —— 这正是为了堵住 Cantor 函数那种「在零测集上爬升」的情形。

记号：$AC([a, b])$ 表示 $[a,b]$ 上绝对连续的函数全体。

参考：Folland, Real Analysis, §3.5

#### 函数绝对连续 ⟺ 测度绝对连续　`prop.ac-iff-measure-ac`
*命题*　命题：F 绝对连续 $\iff \mu_F \ll m$

设 $F \in NBV$。则

$$F\text{ 绝对连续} \iff \mu_F \ll  m$$

**$(\Longleftarrow )$** 由测度的绝对连续的 $\varepsilon$–$\delta$ 刻画：$\mu_F \ll  m$ 给出「$m(E) < \delta \implies |\mu_F(E)| < \varepsilon$」。取 $E$ 为区间的有限不交并，就直接得到函数版的绝对连续性。

**$(\implies )$** 设 $E \in \mathfrak{B}_\mathbb{R}$ 且 $m(E) = 0$。要证 $\mu_F(E) = 0$。取递减开集列 $U_1 \supseteq U_2 \supseteq \cdots \supseteq E$ 使 $m(U_k) < \delta$（由正则性）。每个 $U_k$ 是区间的可数不交并，由函数的绝对连续性与 $m(U_k) < \delta$ 得 $|\mu_F(U_j)| < \varepsilon$；再由测度的上连续性与 $\bigcap U_k = E$ 得 $|\mu_F(E)| \le \varepsilon$。由 $\varepsilon$ 任意，$\mu_F(E) = 0$。∎

⭐ 这条把两个「绝对连续」**接上了**：函数的和测度的。从此「绝对连续函数」这个微积分里的概念有了测度论的解释。

参考：Folland, Real Analysis, Theorem 3.35

#### 积出来的函数是 AC · NBV　`cor.integral-is-ac-nbv`
*推论*　推论：$f \in L^{1}(m) \implies F(x) = \int_{-\infty}^{x} f$ 是 AC、NBV；反之亦然

**(1)** 若 $f \in L^1(m)$，则

$$F(x) := \int_{-\infty}^{x} f(t) dt$$

属于 $AC \cap NBV$。

**(2)** 反之，若 $F \in NBV$ 且绝对连续，则 $F' \in L^1(m)$ 且

$$F(x) = \int_{-\infty}^{x} F'(t) dt$$

两个方向合起来就是「绝对连续函数正好是某个 $L^{1}$ 函数的积分」。

参考：Folland, Real Analysis, Theorem 3.35

#### AC ⊆ BV　`lem.ac-subset-bv`
*引理*　引理：绝对连续蕴含绝对变差（紧区间上）

$$AC([a, b]) \subseteq BV([a, b])$$

证明：由绝对连续性取 $\delta$ 使「总长 $< \delta \implies$ 总变差 $< 1$」。把 [a,b] 切成有限多段、每段长度 $< \delta$，则每段的变差 $\le 1$，加起来 $\le$ 段数 —— 有限。∎

⚠ 反过来不成立：**Cantor 函数在 [0,1] 上有界变差但不绝对连续**。所以这个包含是严格的。

⭐ 这条是下面那条「微积分基本定理 TFAE」的准备工作：它保证 $(a) \implies BV$，从而可以谈 $F'$。

参考：Folland, Real Analysis, §3.5

#### 微积分基本定理（Lebesgue 版）　`thm.ftc-lebesgue`
*定理*　定理（TFAE）：绝对连续 $\iff$ 是 $L^{1}$ 函数的积分 $\iff$ 导数的积分还原

设 $F : [a, b] \to \mathbb{C}$，区间紧。则下列三条**彼此等价**：

**(a)** $F$ 在 $[a, b]$ 上**绝对连续**；

**(b)** 存在 $f \in L^1([a, b])$ 使

$$F(x) - F(a) = \int_a^x f(t) dt\quad  \forall x \in [a, b]$$

**(c)** $F$ **a.e. 可导**、$F' \in L^1([a, b])$，且

$$F(x) - F(a) = \int_a^x F'(t) dt$$

⭐ 这是 **Newton–Leibniz 公式在 Lebesgue 积分下的完整版本**。对比 Riemann 积分：那里「$F'$ 可积且公式成立」要求 $F'$ 连续（或至少 Riemann 可积），这里只需要「$F$ 绝对连续」。

三个条件的分工：(a) 是「函数侧」的条件（用区间划分刻画），(b) 是「积分侧」，(c) 是「导数侧」。定理说它们是同一件事。

⚠ 若去掉绝对连续，公式**会失效**：Cantor 函数满足 (c) 的「a.e. 可导 $F' \in L^{1}$」但 $\int _{0}^{1} F' = 0 \ne F(1) - F(0) = 1$。

证明链条：$(a) \implies (b)$：由 $AC \subseteq BV$ 与「$\mu _F \ll m$」；$(b) \implies (c)$：微积分基本定理的直接推论；$(c) \implies (a)$：由「$F(x) = \int F'$」的形式给出绝对连续性。

参考：Folland, Real Analysis, Theorem 3.35

### 星团：L^p 空间
> 造出函数空间本身：Hölder / Minkowski → Banach 完备 → 空间之间的包含 → 对偶 (L^p)* ≅ L^q。

#### L^p 范数　`def.lp-norm`
*定义*　$L^p$ 范数与 $L^p$ 空间

固定测度空间 $(X, \mathcal{M}, \mu)$。对可测 $f$ 与 $0 < p < \infty$ 定义

$$\|f\|_p := \left[ \int |f|^p \, d\mu \right]^{1/p}$$

以及

$$L^p(X, \mathcal{M}, \mu) := \{\, f : X \to \mathbb{C} : f \text{ 可测},\ \|f\|_p < \infty \,\}$$

基本事实（都可直接验证）：



- $\|f\|_p = 0 \iff f = 0$ a.e.；

- $\|cf\|_p = |c| \, \|f\|_p$；

- $f, g \in L^p \implies f + g \in L^p$（这一步用 $|f+g|^p \le 2^p(|f|^p + |g|^p)$）。



⚠ **$p < 1$ 时三角不等式失效**，所以那时 $L^p$ 只是拟范数空间（虽然它仍然是完备的）。

和 $L^1$ 一样，$L^p$ 的元素其实是**函数的等价类**（a.e. 相等视为同一个），这正是 $\|f\|_p = 0 \implies f = 0$ 得以成立的前提。

参考：Folland, Real Analysis, §6.1

#### Young 不等式　`lem.young-inequality`
*引理*　Young 不等式（$a^\lambda \cdot b^{1-\lambda} \le \lambda a + (1-\lambda)b$）

设 $a \ge 0$，$b \ge 0$，$0 < \lambda < 1$。则

$$a^{\lambda} b^{1-\lambda} \le \lambda a + (1-\lambda) b$$

这就是 $\log$ 的凹性（等价于指数函数的凸性）：



$$\log\!\left( \lambda a + (1-\lambda) b \right) \ge \lambda \log a + (1-\lambda) \log b$$



两边取指数即得。

引出标准特例：取 $\lambda = 1/p$、$a = |f|^p / \|f\|_p^p$、$b = |g|^q / \|g\|_q^q$，就是 **Hölder 不等式** 的证明里那一步。

参考：Folland, Real Analysis, §6.1

#### Hölder 不等式　`thm.holder`
*定理*　Hölder 不等式

设 $1 < p < \infty$，$q$ 是 $p$ 的**共轭指数**：$\dfrac{1}{p} + \dfrac{1}{q} = 1$。则对可测 $f, g$：

$$\|fg\|_1 \le \|f\|_p \, \|g\|_q$$

**取等条件**：等号成立 $\iff$ $|f|^p$ 与 $|g|^q$ 成比例 a.e.（即 $\alpha |f|^p = \beta |g|^q$ a.e.）。

证明：先设 $\|f\|_p = \|g\|_q = 1$。由 Young 不等式，把 $\lambda = 1/p$、$a = |f|^p$、$b = |g|^q$ 代进去得



$$|fg| \le \frac{|f|^p}{p} + \frac{|g|^q}{q}$$



两边积分即得 $\|fg\|_1 \le \frac{1}{p} + \frac{1}{q} = 1$。一般情形把 $f, g$ 各自归一化。

⚠ $p = q = 2$ 时就是 **Cauchy–Schwarz 不等式**。

$p = 1$ 时共轭指数是 $q = \infty$，此时 $\|fg\|_1 \le \|f\|_1 \|g\|_\infty$（见 $L^\infty$ 那一节）。

参考：Folland, Real Analysis, Theorem 6.2

#### Minkowski 不等式　`thm.minkowski`
*定理*　Minkowski 不等式（$L^p$ 的三角不等式）

设 $1 \le p < \infty$。则对 $f, g \in L^p$：

$$\|f + g\|_p \le \|f\|_p + \|g\|_p$$

$p = 1$ 就是积分的三角不等式，显然。

一般 $p$ 的证明：



$$\int |f+g|^p = \int |f+g| \cdot |f+g|^{p-1} \le \int (|f| + |g|) |f+g|^{p-1} \le \left( \|f\|_p + \|g\|_p \right) \left\| |f+g|^{p-1} \right\|_q$$



其中最后一步是对 $|f| \cdot |f+g|^{p-1}$ 与 $|g| \cdot |f+g|^{p-1}$ 各用一次 Hölder。再注意



$$\left\| |f+g|^{p-1} \right\|_q^{\,q} = \int |f+g|^{(p-1)q} = \int |f+g|^p$$



两边约掉一个 $\|f+g\|_p^{p/q}$ 即得。∎

⭐ 有了它，$\|\cdot\|_p$ 才真的成为**范数** —— 这是下面「$L^p$ 是 Banach 空间」的前提。

参考：Folland, Real Analysis, Theorem 6.2

#### L^p 是 Banach 空间　`thm.lp-banach`
*定理*　定理（Riesz–Fischer）：$1 \le p < \infty$ 时 $L^p$ 完备

设 $1 \le p < \infty$。则 $L^p(X, \mathcal{M}, \mu)$ 关于范数 $\|\cdot\|_p$ 是**完备**的，即它是一个 **Banach 空间**。

证明用的判据是：**赋范线性空间完备 $\iff$ 绝对收敛的无穷级数收敛**。

设 $\{f_k\} \subseteq L^p$ 且 $\sum_{k} \|f_k\|_p = B < \infty$。只要证明 $\sum_k f_k$ 在 $L^p$ 范数下收敛即可。

技巧在于把「逐点收敛」与「范数收敛」分开处理：令 $G_n = \sum_{k \le n} |f_k|$、$G = \sum_k |f_k|$，则由 MCT



$$\|G_n\|_p \le \sum_{k \le n} \|f_k\|_p \le B \quad \implies \quad \int G^p = \lim_n \int G_n^p \le B^p$$



故 $G \in L^p$、特别地 $G < \infty$ a.e.，于是 $\sum_k f_k$ **a.e. 绝对收敛**。记极限为 $F$。

再用一次 DCT 拿下范数收敛：$\left| F - \sum_{k \le n} f_k \right|^p \le (2G)^p \in L^1$，故



$$\left\| F - \sum_{k \le n} f_k \right\|_p^p = \int \left| F - \sum_{k \le n} f_k \right|^p \to 0$$



∎

参考：Folland, Real Analysis, Theorem 6.6

#### 紧支简单函数稠密　`prop.dense-simple-compact-support`
*命题*　命题：紧支集简单函数在 $L^p$ 中稠密

设 $1 \le p < \infty$。**紧支集的简单函数**在 $L^p$ 中稠密（$p = \infty$ 时不成立）。

证明：对 $f \in L^p$，取简单函数列 $\{f_n\}$ 使 $f_n \to f$ a.e. 且 $|f_n| \le |f|$（简单函数逼近定理给的就是这个形状）。于是 $f_n \in L^p$，且



$$|f_n - f|^p \le 2^p |f|^p \in L^1$$



由 DCT 得 $\|f_n - f\|_p \to 0$。$f_n$ 是简单函数、支撑集有限 —— 这就是要的稠密性。∎

⚠ **$p = \infty$ 时这条失效**：$L^\infty$ 里的简单函数是「有限个值」，均匀逼近一个连续函数办不到（例如 $\sin$ 型或一般的连续函数）。

参考：Folland, Real Analysis, §6.1

#### 本性上界与 L^∞　`def.essential-sup`
*定义*　本性上界 $\|f\|_\infty$ 与空间 $L^\infty$

定义

$$\|f\|_\infty := \inf \{\, a \ge 0 : \mu(\{\, |f| > a \,\}) = 0 \,\}$$

（把 $f$ 在零集上的取值完全忽略之后，它的「真正」上界。）这个下确界**是可以取到的**：对 $a = \|f\|_\infty$ 本身就有 $\mu(\{|f| > a\}) = 0$。

$$
L^\infty(X, \mathcal{M}, \mu) := \{\, f : X \to \mathbb{C} : f \text{ 可测},\ \|f\|_\infty < \infty \,\}
$$

等价说法：$\|f\|_\infty \le M \iff |f(x)| \le M$ 对 a.e. $x$ 成立。

「本性」两个字的意思是：**把零集上的糟糕取值统统不算**。比如 $f = 0$ a.e. 但 $f$ 在某个零集上取 $+\infty$，仍然有 $\|f\|_\infty = 0$。

⚠ $\|f\|_\infty$ 与「$\sup |f|$」不同：后者可能因为零集上的一点而变得很大。

参考：Folland, Real Analysis, §6.1

#### L^∞ 的性质　`thm.linf-properties`
*定理*　定理：$L^\infty$ 的五条基本性质

**(a)** $\|fg\|_\infty \le \|f\|_\infty \|g\|_\infty$。若 $f \in L^1$、$g \in L^\infty$，则

$$\|fg\|_1 = \|f\|_1 \|g\|_\infty \iff |g(x)| = \|g\|_\infty \text{ a.e. on } \{f \ne 0\}$$

**(b)** $\|\cdot\|_\infty$ 是 $L^\infty$ 上的**范数**。

**(c)** $\|f_n - f\|_\infty \to 0 \iff$ 存在 $E \in \mathcal{M}$、$\mu(E^c) = 0$，使 $f_n \to f$ **在 $E$ 上一致收敛**。

**(d)** $L^\infty$ 是 **Banach 空间**。

**(e)** 简单函数在 $L^\infty$ 中**稠密**。

⚠ (c) 值得注意：$L^\infty$ 范数收敛 $=$ **「丢掉一个零集之后一致收敛」** —— 这是 $L^\infty$ 独有的、比其他 $L^p$ 强得多的性质。

⚠ (e) 与「紧支简单函数在 $L^p$ 稠密」形成对照：$L^\infty$ 里简单函数够稠密，但**紧支**的就不够（因为 $L^\infty$ 不看测度大小，只看逐点大小）。

一个很有用的直觉 ——「**$L^p$ 怎么样失败？**」：



1. 在某点**增长太快**（局部爆破）；

2. 在无穷远**衰减太慢**。



记住这两条，下面三个包含关系命题的取向就都能自己想出来。

参考：Folland, Real Analysis, §6.1

#### L^q 落在 L^p + L^r 里　`prop.lq-in-lp-plus-lr`
*命题*　命题：$L^q \subseteq L^p + L^r$（$0 < p < q < r \le \infty$）

设 $0 < p < q < r \le \infty$。则

$$L^q \subseteq L^p + L^r$$

（右边理解为 $\{ g + h : g \in L^p,\ h \in L^r \}$。）

证明：取 $f \in L^q$，按「大」与「小」把它切开 ——



$$E := \{\, x : |f(x)| > 1 \,\}, \qquad g := f \chi_E, \qquad h := f \chi_{E^c}$$



则



$$|g|^p = |f|^p \chi_E \le |f|^q \chi_E, \qquad |h|^r = |f|^r \chi_{E^c} \le |f|^q \chi_{E^c}$$



（第二式用到 $|f| \le 1$ 在 $E^c$ 上成立。）于是 $g \in L^p$、$h \in L^r$。$r = \infty$ 时 $\|h\|_\infty \le 1$，显然。∎

⭐ 这条说的是：**中间的 $L^q$ 可以被两端的 $L^p$ 与 $L^r$ 分担** —— 「大的部分」交给小的指数管，「小的部分」交给大的指数管。

参考：Folland, Real Analysis, Prop. 6.4

#### L^p ∩ L^r ⊆ L^q　`prop.lp-inter-lr-in-lq`
*命题*　命题（插值）：$L^p \cap L^r \subseteq L^q$

设 $0 < p < q < r \le \infty$。若 $f \in L^p \cap L^r$，则 $f \in L^q$，且

$$\|f\|_q \le \|f\|_p^{\lambda} \, \|f\|_r^{1-\lambda}$$

其中 $\lambda \in (0,1)$ 由下式确定：

$$\frac{1}{q} = \frac{\lambda}{p} + \frac{1-\lambda}{r} \qquad \iff \qquad \lambda = \frac{\,q^{-1} - r^{-1}\,}{p^{-1} - r^{-1}}$$

这是 **Riesz–Thorin 插值定理**的初等特例：$L^q$ 范数被两端的 $L^p$、$L^r$ 范数「对数凸」地控制住。

证明：$r = \infty$ 的情形最干净 —— 此时 $\lambda = p/q$，从 $|f|^q \le \|f\|_\infty^{\,q-p} |f|^p$ 出发，



$$\|f\|_q \le \|f\|_p^{p/q} \|f\|_\infty^{1-p/q} = \|f\|_p^{\lambda} \|f\|_\infty^{1-\lambda}$$

一般 $r < \infty$ 时对



$$|f|^q = |f|^{\lambda q} \cdot |f|^{(1-\lambda)q}$$

用 Hölder，指数取 $p/(\lambda q)$ 与 $r/((1-\lambda)q)$（它们的倒数和恰好是 $1$，这正是 $\lambda$ 的定义），得到



$$\|f\|_q^q \le \left[ \int |f|^p \right]^{\lambda q/p} \left[ \int |f|^r \right]^{(1-\lambda)q/r} = \|f\|_p^{\lambda q} \|f\|_r^{(1-\lambda)q}$$

两边开 $q$ 次方即可。∎

参考：Folland, Real Analysis, Prop. 6.4

#### ℓ^p ⊆ ℓ^q　`prop.ell-p-inclusion`
*命题*　命题（只有衰减的场合）：$\ell^p \subseteq \ell^q$（$0 < p < q \le \infty$）

设 $0 < p < q \le \infty$，$A$ 是任意指标集。则

$$\ell^p(A) \subseteq \ell^q(A), \qquad \|f\|_q \le \|f\|_p$$

这里 $\ell^p$ 是**计数测度**下的 $L^p$ —— 没有「局部爆破」可言，只剩「衰减」。

证明：先看 $q = \infty$。由 $|f|^p$ 的每一项都不超过总和，



$$\|f\|_\infty^p = \sup_{\alpha} |f(\alpha)|^p \le \sum_{\alpha} |f(\alpha)|^p = \|f\|_p^p$$

故 $\|f\|_\infty \le \|f\|_p$。一般 $q < \infty$ 用插值：



$$\|f\|_q \le \|f\|_p^{p/q} \|f\|_\infty^{1-p/q} \le \|f\|_p$$

（第二个不等号把 $\|f\|_\infty \le \|f\|_p$ 代进去。）∎

⭐ 方向记法：**指数越大，空间越小**（在 $\ell^p$ 里）—— 因为要求「衰减更快」。

参考：Folland, Real Analysis, §6.1

#### 有限测度时方向反过来　`prop.lp-inclusion-finite`
*命题*　命题（只有爆破的场合）：$\mu(X) < \infty$ 时 $L^p(\mu) \supseteq L^q(\mu)$

设 $\mu(X) < \infty$，$0 < p < q \le \infty$。则

$$L^q(\mu) \subseteq L^p(\mu), \qquad \|f\|_p \le \|f\|_q \, \mu(X)^{\,(1/p) - (1/q)}$$

证明：$q = \infty$ 时，



$$\|f\|_p^p = \int |f|^p \le \|f\|_\infty^p \int 1 = \|f\|_\infty^p \, \mu(X)$$

一般 $q < \infty$ 时，把 $|f|^p$ 看作 $|f|^p \cdot 1$，对它用 Hölder，指数取 $q/p$ 与 $q/(q-p)$：



$$\|f\|_p^p = \int |f|^p \cdot 1 \le \big\| |f|^p \big\|_{q/p} \, \|1\|_{q/(q-p)} = \|f\|_q^p \, \mu(X)^{(q-p)/q}$$

两边开 $p$ 次方即得。∎

⭐ **与 $\ell^p$ 的方向正好相反**（那里是 $p$ 越大空间越小，这里是越小越大）。

记忆口诀：



- **测度有限** $\to$ 只有「爆破」要防 $\to$ 指数**越小**空间**越大**：$L^1 \supseteq L^2 \supseteq \cdots \supseteq L^\infty$；

- **计数测度** $\to$ 只有「衰减」要防 $\to$ 指数**越大**空间**越小**：$\ell^1 \subseteq \ell^2 \subseteq \cdots \subseteq \ell^\infty$。

参考：Folland, Real Analysis, §6.1

#### 共轭指数　`def.conjugate-exponents`
*定义*　共轭指数（Conjugate Exponents）

设 $1 \le p \le \infty$。称 $q$ 是 $p$ 的**共轭指数**，当且仅当

$$\frac{1}{p} + \frac{1}{q} = 1$$

（约定 $1/\infty = 0$，于是 $p = 1$ 对应 $q = \infty$，$p = \infty$ 对应 $q = 1$。）

由对称性 $\dfrac{1}{q} + \dfrac{1}{p} = 1$，所以「共轭」是相互的：$p$ 与 $q$ 互为共轭。

$p = 2$ 时 $q = 2$：**$L^2$ 是自共轭的** —— 这是 Hilbert 空间理论的起点。

⭐ 共轭指数的意义：Hölder 不等式说 $L^p$ 与 $L^q$ 之间有一对「配对」$\int fg$；而下面的对偶定理说这个配对**恰好就是 $L^p$ 的整个对偶空间**。

参考：Folland, Real Analysis, §6.2

#### 对偶配对 φ_g　`def.duality-map`
*定义*　由 g 给出的线性泛函 $\varphi_g(f) = \int f\cdot g$

设 $p, q$ 共轭，$g \in L^q$。定义 $L^p$ 上的线性泛函

$$\varphi_g(f) := \int f g \, d\mu$$

由 **Hölder 不等式**，这个泛函是有界的，而且



$$\|\varphi_g\| \le \|g\|_q$$

（这里 $\|\varphi_g\|$ 是 $(L^p)^*$ 里的算子范数，即 $\sup\{|\varphi_g(f)| : \|f\|_p = 1\}$。）

⭐ 于是得到一个映射



$$L^q \longrightarrow (L^p)^*, \qquad g \mapsto \varphi_g$$

下面两条命题要证明它是一个**等距同构**（在 $1 < p < \infty$ 时）。

参考：Folland, Real Analysis, §6.2

#### ‖g‖_q = ‖φ_g‖　`prop.duality-isometry`
*命题*　命题：$\|\varphi_g\| = \|g\|_q$（$\mu$ 半有限时也含 $q = \infty$）

设 $p, q$ 共轭。则

- 若 $1 \le q < \infty$，$g \in L^q$，就有 $\|\varphi_g\| = \|g\|_q$；
- 若 $\mu$ 是**半有限**的，$q = \infty$ 时同样成立。

证明的要点是**构造一个把 $\varphi_g$ 的范数顶满的 $f$**。



**$q < \infty$ 时**：由 Hölder 已有 $\|\varphi_g\| \le \|g\|_q$；反向取



$$f := \frac{|g|^{q-1} \operatorname{sgn} g}{\|g\|_q^{\,q-1}}$$



直接算得 $\|f\|_p^p = \dfrac{\int |g|^q}{\int |g|^q} = 1$，于是



$$\|\varphi_g\| \ge \int fg = \|g\|_q$$

**$q = 1$ 时**取 $f = \operatorname{sgn} g$（范数 1），得 $\int fg = \|g\|_1$。

**$q = \infty$ 时**要用到半有限性：对任意 $\varepsilon > 0$，集合 $A = \{|g(x)| > \|g\|_\infty - \varepsilon\}$ 有正测度；由半有限性取 $B \subseteq A$ 使 $0 < \mu(B) < \infty$，令



$$f := \mu(B)^{-1} \chi_B \operatorname{sgn} g$$



则 $\|f\|_1 = 1$ 而 $\|\varphi_g\| \ge \int fg = \dfrac{1}{\mu(B)} \int_B |g| \ge \|g\|_\infty - \varepsilon$。由 $\varepsilon$ 任意即得。∎

参考：Folland, Real Analysis, Prop. 6.8

#### 有界 ⟹ g ∈ L^q　`prop.bounded-functional-gives-lq`
*命题*　命题：若 $f \mapsto \int fg$ 在简单函数上有界，则 $g \in L^q$

设 $g$ 在 $(X, \mathcal{M})$ 上可测，且对**每个有限支集的简单函数** $f$ 都有 $fg \in L^1$。记

$$M_g(g) := \sup \left\{ \, \left| \int fg \right| : f \in \Sigma,\ \|f\|_p = 1 \,\right\}$$

（$\Sigma$ $=$ 有限支集简单函数全体。）若 $M_g(g) < \infty$，且

- $\{x : g(x) \ne 0\}$ 是 **$\sigma$有限** 的，**或**
- $\mu$ 是**半有限**的，

则 $g \in L^q$，且 $M_g(g) = \|g\|_q$。

这条是下一个大定理（$(L^p)^* \cong L^q$）的技术准备：它说「泛函有界」这件事本身就已经把 $g$ 逼进了 $L^q$。

证明分三步（见右侧箭头）：Step 1 先证「$f$ 有限支可测」时也有 $|\int fg| \le M_g(g)$；Step 2 处理 $q < \infty$；Step 3 处理 $q = \infty$。

⚠ 两个前提条件（$\sigma$有限 / 半有限）在 Step 2、Step 3 里各用一次，**不能省**。

参考：Folland, Real Analysis, Theorem 6.14

#### (L^p)* ≅ L^q　`thm.riesz-representation-lp`
*定理*　定理（Riesz 表示）：$1 < p < \infty$ 时 $(L^p)^{*} \cong L^q$

设 $1 < p < \infty$，$q$ 是共轭指数。则对每个 $\Phi \in (L^p)^*$，存在**唯一**（a.e.）的 $g \in L^q$ 使

$$
\Phi(f) = \int f g \, d\mu \qquad \forall f \in L^p
$$

于是映射 $g \mapsto \varphi_g$ 是 $L^q$ 到 $(L^p)^*$ 的**等距同构**：

$$(L^p)^* \cong L^q$$

特别地，$p = 2$ 时 $L^2$ 自对偶。

⭐ 这是 $L^p$ 理论的高潮：**$L^p$ 上的每一个连续线性泛函，都只是「乘一个 $L^q$ 函数再积分」**。

$p = 1$、$\mu$ $\sigma$有限时结论同样成立（$(L^1)^* \cong L^\infty$）；

⚠ 但 $p = \infty$ 时**不成立**：$(L^\infty)^*$ 严格大于 $L^1$（存在不是由 $L^1$ 函数给出的有界线性泛函，比如在 $C[0,1]$ 上调 Hahn–Banach 得到的那些）。

证明思路（见右侧箭头）：先把 $\Phi$ 变成一个复测度（$\nu(E) := \Phi(\chi_E)$），再用 Radon–Nikodym 把它写成 $\int \cdot \, g \, d\mu$，最后验证 $g \in L^q$。

参考：Folland, Real Analysis, Theorem 6.15

#### L^p 自反　`cor.lp-reflexive`
*推论*　推论：$1 < p < \infty$ 时 $L^p \cong (L^p)^{**}$

设 $1 < p < \infty$。则

$$L^p \cong (L^p)^{**}$$

即 $L^p$ 是**自反**的 Banach 空间。

把对偶定理用两次即可：$(L^p)^* \cong L^q$，而 $q$ 的共轭又回到 $p$，故 $(L^p)^{**} \cong (L^q)^* \cong L^p$。

⚠ $p = 1$ 与 $p = \infty$ 时**不**自反。

⭐ 自反性的价值：自反 Banach 空间里**有界序列必有弱收敛子列**（Banach–Alaoglu / Eberlein–Šmulian），这是变分法与 PDE 里取极限的基本工具。

参考：Folland, Real Analysis, §6.2

---

## 全部连线（含推导过程）

### 强边（标准逻辑关系）

#### 替换公理模式 ⟹ 分离公理模式　`imp.repl-to-sep`
*替换公理模式 $\implies$ 分离公理模式*

设 $\varphi (x, p)$ 是不含 $B$ 的公式，$A$ 是任意集合。取公式

$$\psi(x, y, p) :\equiv  ( x = y \wedge  \varphi(x, p) )$$

对任意 $x$，至多只有一个 $y$ 使 $\psi (x, y, p)$ 成立（因为 $x = y$ 已经确定了 $y$）。于是替换公理模式给出一个集合

$$B = \{ y : \exists x \in A, \psi(x, y, p) \} = \{ x \in A : \varphi(x, p) \}$$

这正是分离公理模式所要的 $B$（外延公理保证唯一）。∎

> 所以 ZF 里其实只需要「替换 + 一个集合存在」就够了，教材仍保留分离公理是为了方便陈述与使用。

#### 分离公理模式 ⟹ 空集存在　`imp.sep-to-empty`
*分离公理模式 $\implies$ 空集存在*

取任意集合 $a$（一阶逻辑的论域非空，故这样的 $a$ 存在；在 ZF 中也可由无穷公理提供）。

取公式 $\varphi (x) :\equiv ( x \ne x )$，它是矛盾式。分离公理模式给出集合

$$B = \{ x \in a : x \ne x \}$$

对任意 $x$，$x \in B \leftrightarrow ( x \in a \wedge x \ne x )$ 恒为假，故 $B$ 不含任何元素。
由外延公理，这样的 $B$ 唯一，记作 $\emptyset$。∎

> 严格地说，「论域非空」是一阶逻辑的约定，不属于 ZF 公理。若不喜欢这个约定，也可以先由无穷公理取出一个集合再分离。

#### 正则公理 + 配对公理 ⟹ 无自属集合　`imp.found-to-noself`
*正则公理 + 配对公理 $\implies A \notin A$*

反设存在集合 $A$ 使 $A \in A$。由配对公理取 $a = b = A$，得单点集 {A}。

由外延公理 $\{A\} \ne \emptyset$（它含有 $A$）。对 {A} 用正则公理：存在 $x \in \{A\}$ 使

$$x \cap \{ A \} = \emptyset$$

而 {A} 只有唯一的元素，故 $x = A$。于是 $A \cap \{A\} = \emptyset$。

但由假设 $A \in A$ 且 $A \in \{A\}$，所以 $A \in A \cap \{A\}$，与 $A \cap \{A\} = \emptyset$ 矛盾。故 $A \notin A$。∎

> 把同样的论证用在任意有限 $\in$循环 $A_{0} \ni A_{1} \ni \cdots \ni A_{n} = A_{0}$ 上，取集合 $\{A_{0}$ …$A_{n-1}\}$（可由配对公理反复构造），也能得到矛盾。

#### 无穷公理 + 幂集公理 + 分离公理模式 ⟹ 自然数集存在　`imp.inf-to-omega`
*无穷公理 + 幂集公理 + 分离公理模式 $\implies \omega$ 存在*

1. 由无穷公理取一个归纳集 $I$。称 $J \subseteq I$ 是**归纳的**，若 $\emptyset \in J$ 且 $\forall x (x \in J \to x \cup \{x\} \in J)$。

2. 由幂集公理，$\mathcal{P}(I)$ 是集合；再用分离公理模式取

$$S = \{ J \in \mathcal{P}(I) : J\text{ 是归纳集} \}$$

$S$ 非空（$I \in S$）。

3. 再对 $\mathcal{P}(I)$ 用一次分离公理模式，令

$$\omega = \{ x \in I : \forall J ( J \in S \to x \in J ) \}$$

即 $\omega$ 是所有归纳子集的交。

4. $\omega$ 是归纳集：$\emptyset$ 属于每个 $J \in S$，故 $\emptyset \in \omega$；若 $x \in \omega$，则 $x$ 属于每个 $J \in S$，从而 $x \cup \{x\}$ 属于每个 $J \in S$，故 $x \cup \{x\} \in \omega$。

5. $\omega$ 含于一切归纳集：若 $K$ 是归纳集，则 $K \cap I$ 也是归纳集且 $K \cap I \in S$，由 $\omega$ 的定义 $\omega \subseteq K \cap I \subseteq K$。

故 $\omega$ 是最小归纳集，即自然数集。∎

#### 配对公理 + 并集公理 ⟹ 二元并存在　`imp.binunion`
*配对公理 + 并集公理 $\implies$ 二元并存在*

任给 $a$、$b$。

1. 由配对公理，{ a, b } 是集合。
2. 由并集公理，$\bigcup \{ a, b \}$ 是集合，且

$$x \in \bigcup\{ a, b \} \iff \exists Y ( Y \in \{ a, b \} \wedge  x \in Y ) \iff ( x \in a \vee  x \in b )$$

取 $A = \bigcup \{ a, b \}$ 即为所求。∎

#### 幂集公理 + 配对公理 + 并集公理 + 分离公理模式 ⟹ 笛卡尔积存在　`imp.product`
*幂集 + 配对 + 并集 + 分离公理模式 $\implies A \times B$ 存在*

任给 $A$、$B$。

1. 由配对公理与并集公理，$A \cup B$ 是集合。

2. 对任意 $a \in A$、$b \in B$，Kuratowski 有序对 $(a, b) = \{\{a\}, \{a, b\}\}$。其中 $\{a\} \subseteq A \cup B$，$\{a, b\} \subseteq A \cup B$，所以 $\{a\}, \{a, b\} \in \mathcal{P}(A \cup B)$，进而 $(a, b) \in \mathcal{P}(\mathcal{P}(A \cup B))$。

3. 由幂集公理，$\mathcal{P}(\mathcal{P}(A \cup B))$ 是集合。用分离公理模式取

$$C = \{ z \in \mathcal{P}(\mathcal{P}(A \cup B)) : \exists a \in A, \exists b \in B, z = (a, b) \}$$

则 $C$ 恰是 $A \times B$：一方面每个 (a, b) 都在 $\mathcal{P}(\mathcal{P}(A \cup B))$ 中，另一方面 $z$ 是不在 $A$、$B$ 中任意点处取到的有序对时不会被选进来。∎

> 这个证明展示了一个典型套路：先用幂集「造一个足够大的容器」，再用分离公理模式「筛出真正想要的东西」。

#### 选择公理 ⟺ 良序定理　`eq.ac-wo`
*选择公理 $\iff$ 良序定理*

**选择公理 ⇒ 良序定理（路线 1⟹4）**

设 $X$ 是集合。$X = \emptyset$ 时平凡，以下设 $X \ne \emptyset$。

1. 由 AC，非空子集族 $\mathcal{P}(X) \setminus \{\emptyset \}$ 上有选择函数 $\varphi$，即 $\varphi (A) \in A$ 对每个非空 $A \subseteq X$ 成立。

2. 用超限递归往下取元素：对序数 $\alpha$，只要余集非空就令

$$x(\alpha) = \varphi( X \setminus \{ x(\beta) : \beta < \alpha \} )$$

一旦余集为空就停止。

3. **过程一定会停**：取 $X$ 的 **Hartogs 数** $\aleph (X)$，即最小的不能单射进 $X$ 的序数（见「Hartogs 定理」——它在 ZF 里就能证，不需要 AC）。若对一切 $\alpha < \aleph (X)$ 过程都没停，则 $\alpha \mapsto x(\alpha )$ 就是 $\aleph (X)$ 到 $X$ 的单射，与 $\aleph (X)$ 的定义矛盾。故存在序数 $\gamma$ 使 $x : \gamma \to X$ 是双射。

4. 把 $\gamma$ 上的序经 $x$ 搬到 $X$ 上：

$$a \preceq b :\iff x^{-1}(a) \le x^{-1}(b)$$

因为序数在 $\in$／$\le$ 下是良序的，$X$ 上这个序也是良序。∎

**良序定理 ⇒ 选择公理（路线 4⟹1）**

设 $F$ 是一族非空集合（即 $\emptyset \notin F$）。

1. 由良序定理，取 $U = \bigcup F$ 的一个良序 $\preceq$。

2. 对每个 $X \in F$：$X \ne \emptyset$ 且 $X \subseteq U$，所以 $X$ 是 $U$ 的非空子集，有 $\preceq$最小元 m(X)。

3. 定义 $f(X) = m(X)$（$X$ 唯一确定 m(X)，故这是一个函数）。则 $\operatorname{dom} f = F$ 且 $f(X) \in X$ 对一切 $X \in F$ 成立，即 $f$ 是 $F$ 的选择函数。

由 $F$ 的任意性，AC 成立。∎

> 这是整张星图里最关键的一条等价链的起点：AC 给「挑选」，良序给「最小」，两者互为表里。

#### 良序定理 ⟺ 佐恩引理　`eq.wo-zorn`
*良序定理 $\iff$ 佐恩引理*

**良序定理 ⇒ 佐恩引理**

设 $(P, \preceq )$ 是非空偏序集，且 $P$ 的每个链都有上界。由良序定理，取 $P$ 上的一个良序 $\le$（与 $\preceq$ 无关）。

用超限递归沿 $\le$ 构造 $P$ 的一个 $\preceq$链 $C$：

- 记 $U(C) = \{ u \in P : u$ 是 $C$ 的 $\preceq$上界 }。
- 若 U(C) 中存在元素有 $\preceq$严格上界，就取其中 $\le$最小的那个 $v$，令 $C \leftarrow C \cup \{v\}$；
- 否则停止。

**为什么必停**：每步都往 $C$ 里加入一个不属于 $C$ 的元素，所以若在任意序数处都不停，就会得到从「全体序数」到 $P$ 的单射。由替换公理模式，全体序数会是一个集合的像，即序数全体构成集合——这与 Burali-Forti 悖论矛盾。故递归在某个序数 $\beta$ 处停止。

**停止时 $C$ 有上界**：$C$ 是 $\preceq$链，由题设 $U(C) \ne \emptyset$，取 $u \in U(C)$。

**$u$ 是极大元**：若存在 $w \in P$ 使 $u \prec w$，则 $w \succ u \succeq c$（$\forall c \in C$），故 $w \in U(C)$ 是有严格上界的元素，与「停止条件」矛盾。

故 $u$ 是 $P$ 的 $\preceq$极大元。∎

**佐恩引理 ⇒ 良序定理**

设 $X$ 是集合。考虑「$X$ 的部分良序」全体：

$$\mathcal{W} = \{ (W, \preceq_W) : W \subseteq X, \preceq_W\text{ 是} W\text{ 上的良序} \}$$

按**初始段延拓**排序：

$(W_{1}, \preceq _{1}) \le (W_{2}, \preceq _{2}) \iff W_{1} \subseteq W_{2}$，$\preceq _{1} = \preceq _{2}|W_{1}$，且 $W_{1}$ 是 $(W_{2}, \preceq _{2})$ 的一个前段。

1. $(\mathcal{W}, \le )$ 是偏序集（三条性质直接验证）。

2. **每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{W}$ 是链。令 $W^{*} = \bigcup \{ W : (W, \preceq ) \in \mathcal{D} \}$，在 $W^{*}$ 上定义

$$x \preceq_* y \iff\text{ 存在} (W, \preceq_W) \in \mathcal{D}\text{ 使} x, y \in W\text{ 且} x \preceq_W y$$

因 $\mathcal{D}$ 是链，这些良序彼此兼容，$\preceq_*$ 是 $W^{*}$ 上的良序，且 $(W^{*}, \preceq_*)\in \mathcal{W}$ 是 $\mathcal{D}$ 的上界。

3. 由佐恩引理，取极大元 $(W, \preceq )$。

4. 若 $W \ne X$，取 $x \in X \setminus W$，在 $W \cup \{x\}$ 上定义序：保留 $W$ 上的 $\preceq$，并令所有 $w \in W$ 都 $\preceq x$（把 $x$ 放在最顶端）。这仍是良序，而且是 $(W, \preceq )$ 的严格延拓，与极大性矛盾。故 $W = X$，即 $X$ 被良序化。∎

#### 佐恩引理 ⟺ Hausdorff 极大原理　`eq.zorn-hausdorff`
*佐恩引理 $\iff$ Hausdorff 极大原理*

**佐恩引理 ⇒ Hausdorff 极大原理（路线 2⟹3）**

设 $(P, \preceq )$ 是偏序集，$C_{0} \subseteq P$ 是链。令

$$\mathcal{C} = \{ C \subseteq P : C\text{ 是链} \}$$

按包含关系 $\subseteq$ 排序。给定 $C_{0}$ 时改用 $\mathcal{C}_{0} = \{ C \in \mathcal{C} : C \supseteq C_{0} \}$，它非空（$C_{0} \in \mathcal{C}_{0}$）。

1. **$\mathcal{C}_{0}$ 中每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{C}_{0}$ 是（$\subseteq$）链，即 $\mathcal{D}$ 是一族两两可比较的链。令 $U = \bigcup \mathcal{D}$。任取 $x, y \in U$，则有 $D_{1}, D_{2} \in \mathcal{D}$ 使 $x \in D_{1}$、$y \in D_{2}$；因 $\mathcal{D}$ 是链，不妨设 $D_{1} \subseteq D_{2}$，于是 $x, y \in D_{2}$，而 $D_{2}$ 是链，故 $x$ 与 $y$ 可比。所以 $U$ 是链。又每个 $D \in \mathcal{D}$ 都 $\supseteq C_{0}$，故 $U \supseteq C_{0}$，即 $U \in \mathcal{C}_{0}$，它是 $\mathcal{D}$ 的上界。

2. 由佐恩引理，$\mathcal{C}_{0}$ 有极大元 $M$。$M$ 是包含 $C_{0}$ 的链，且不能再变大，即 $M$ 是包含 $C_{0}$ 的极大链。∎

**Hausdorff 极大原理 ⇒ 佐恩引理（路线 3⟹2）**

设 $(P, \preceq )$ 是非空偏序集，且 $P$ 的每个链都有上界。

1. 由 Hausdorff 极大原理（取 $C_{0} = \emptyset$），$P$ 存在极大链 $M$。

2. M 是链，故由题设有上界 $u \in P$。

3. **断言 $u$ 是极大元**：若不然，存在 $v \in P$ 使 $u \prec v$。则 $M \cup \{v\}$ 仍是链——任取 $m \in M$，由 $m \preceq u \prec v$ 及传递性得 $m \preceq v$，故 $m$ 与 $v$ 可比。于是 $M \subset M \cup \{v\}$ 是一个更大的链，与 $M$ 的极大性矛盾。

故 $u$ 是 $P$ 的极大元。∎

#### Hausdorff 极大原理 ⟺ Tukey 引理　`eq.hausdorff-tukey`
*Hausdorff 极大原理 $\iff$ Tukey 引理*

**Tukey 引理 ⇒ Hausdorff 极大原理**

设 $(P, \preceq )$ 是偏序集，$C_{0} \subseteq P$ 是链。令 $\mathcal{C} = \{ C \subseteq P : C$ 是链 }。

1. **$\mathcal{C}$ 具有有限特征**：对任意 $X \subseteq P$，

$X$ 是链 $\iff X$ 中任两元素可比 $\iff X$ 的每个有限子集是链 $\iff X$ 的每个有限子集属于 $\mathcal{C}$。

（最后一个 $\Longleftarrow$ 方向：任取 $x, y \in X$，则 {x, y} 是 $X$ 的有限子集，属于 $\mathcal{C}$，故 $x$ 与 $y$ 可比。）

2. $\mathcal{C}$ 非空（$\emptyset$ 是链）。由 Tukey 引理，$\mathcal{C}$ 有极大元 $M$，即 $P$ 的极大链。

3. 若要包含给定的 $C_{0}$：注意 $\mathcal{C}_{0} = \{ C \in \mathcal{C} : C \supseteq C_{0} \}$ 同样具有有限特征——「$X$ 含 $C_{0}$ 且 $X$ 的每个有限子集是链」正是有限特征的形状（含 $C_{0}$ 是整体性质，不对有限子集设限）。对 $\mathcal{C}_{0}$ 用 Tukey 引理即得包含 $C_{0}$ 的极大链。∎

**Hausdorff 极大原理 ⇒ Tukey 引理**

设 $\mathcal{A}$ 是具有有限特征的非空集合族。把 Hausdorff 极大原理用在偏序集 $(\mathcal{A}, \subseteq )$ 上，得到 $\mathcal{A}$ 的一个**极大链** $\mathcal{C}$（即 $\mathcal{A}$ 中一族在 $\subseteq$ 下两两可比较、且不能再扩大成员的子族）。

令

$$U = \bigcup \{ A : A \in \mathcal{C} \}$$

1. **$U \in \mathcal{A}$**：由有限特征，只需证 $U$ 的每个有限子集属于 $\mathcal{A}$。设 $S \subseteq U$ 有限，则每个 $s \in S$ 落在某个 $A_s \in \mathcal{C}$ 中；$\mathcal{C}$ 是 $\subseteq$链而 $S$ 有限，故其中必有最大的 $A_{0}$ 包含 $S$（即 $S \subseteq A_{0}$）。因为 $A_{0} \in \mathcal{A}$ 且 $\mathcal{A}$ 具有有限特征，$A_{0}$ 的每个有限子集都属于 $\mathcal{A}$，特别地 $S \in \mathcal{A}$。故 $U$ 的每个有限子集属于 $\mathcal{A}$，从而 $U \in \mathcal{A}$。

2. **$U$ 是极大元**：若存在 $B \in \mathcal{A}$ 使 $U \subset B$，则 $\mathcal{C} \cup \{B\}$ 仍是 $\subseteq$链（每个 $A \in \mathcal{C}$ 满足 $A \subseteq U \subseteq B$），与 $\mathcal{C}$ 的极大性矛盾。

故 $U$ 是 $(\mathcal{A}, \subseteq )$ 的极大元。∎

> 这一对证明很典型：先看出「链」这个概念本身具有有限特征，就把 Hausdorff 原理换成了用起来更省事的 Tukey 引理。

#### 选择公理 + Hartogs 定理 ⟹ 佐恩引理　`imp.hartogs-zorn`
*选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）*

设 $(P, \preceq )$ 是非空偏序集，且 $P$ 的每个链都有上界。目标是造出一个极大元。

**① 一个选择函数**：由 AC，$\mathcal{P}(P) \setminus \{\emptyset \}$ 上有选择函数 $\varphi$，即 $\varphi (A) \in A$ 对每个非空 $A \subseteq P$ 成立。整段证明只挑这一次。

**② 链的严格上界**：对链 $C \subseteq P$ 记

$$S(C) = \{ p \in P : \forall c \in C, p \succ  c \}$$

（约定 $S(\emptyset ) = P$。）注意「$C$ 有上界」与「$S(C) \ne \emptyset$」不是一回事：$S$ 要的是**严格**上界。

**③ 超限递归**：只要 $S$ 非空就往下走 ——

$$p(\alpha) = \varphi( S(\{ p(\beta) : \beta < \alpha \}) )\quad \text{ 只要} S(\{ p(\beta) : \beta < \alpha \}) \ne \emptyset;\text{ 一旦} S\text{ 为空就停}$$

于是得到一列严格递增的 $p(0) \prec p(1) \prec p(2) \prec \cdots$。第 0 步用 $S(\emptyset ) = P \ne \emptyset$，所以 $p(0) = \varphi (P)$ 有定义。

**④ 必停**：由 **Hartogs 定理**，$\aleph (P)$ 是不能单射进 $P$ 的最小序数。把递归的上限取到 $\aleph (P)$ 就够 —— 若对一切 $\alpha < \aleph (P)$ 都不停，则 $\alpha \mapsto p(\alpha )$ 就是一个单射 $\aleph (P) \to P$，与 $\aleph (P)$ 的定义矛盾。故存在 $\alpha _{0} < \aleph (P)$ 使 $S(\{ p(\beta ) : \beta < \alpha _{0} \}) = \emptyset$。（这一步只用到 ZF，不用 AC。）

**⑤ 停下来就给极大元**：令 $C = \{ p(\beta ) : \beta < \alpha _{0} \}$，它是 $P$ 的一个链（而且是严格递增的），由题设存在上界 $u \in P$。

**⑥ $u$ 是极大元**：若存在 $v \in P$ 使 $u \prec v$，则由 $u \succeq c$（$\forall c \in C$）与传递性得 $v \succ c$（$\forall c \in C$），即 $v \in S(C)$ —— 与 $S(C) = \emptyset$ 矛盾。故 $u$ 是 $P$ 的极大元。∎

$>$ 这一路线的分工很干净：**AC 负责「挑」，Hartogs 负责「停」**。对比之下，经由良序定理的证法（见「良序定理 $\iff$ 佐恩引理」那条黑线）是把「停」交给 Burali–Forti 悖论。

> 比走良序定理更直：整段只挑一次元素，终止性由 Hartogs 定理（ZF 可证）兜底。

#### 佐恩引理 ⟹ 选择公理　`imp.zorn-choice`
*佐恩引理 $\implies$ 选择公理（路线 $2\implies1$）*

设 $\{A_i\}_\{i \in I\}$ 是一族非空集合。要对它造出一个选择函数。

**① 舞台：部分选择函数全体**。令

$$\mathcal{F} = \{ f : f\text{ 是函数}, \operatorname{dom} f \subseteq I,\text{ 且} \forall i \in \operatorname{dom} f, f(i) \in A_i \}$$

按包含关系 $\subseteq$ 排序。$\mathcal{F} \ne \emptyset$（空函数在 $\mathcal{F}$ 中），且 $(\mathcal{F}, \subseteq )$ 是偏序集。

**② 每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{F}$ 是 $\subseteq$链，令 $f = \bigcup \mathcal{D}$。

$f$ 是函数：若 $(i, a), (i, a') \in f$，则它们分别属于某个 $f_{1}, f_{2} \in \mathcal{D}$；$\mathcal{D}$ 是链，不妨设 $f_{1} \subseteq f_{2}$，于是 $(i, a), (i, a') \in f_{2}$，而 $f_{2}$ 是函数，故 $a = a'$。
$f \in \mathcal{F}$：$\operatorname{dom} f = \bigcup _\{g \in \mathcal{D}\} \operatorname{dom} g \subseteq I$，且对 $i \in \operatorname{dom} f$ 有 $f(i) \in A_i$。
$f$ 是 $\mathcal{D}$ 的上界：$f \supseteq g$ 对一切 $g \in \mathcal{D}$ 成立。

**③ 用佐恩引理**，取 $(\mathcal{F}, \subseteq )$ 的极大元 $f$。

**④ 极大元必须「定义在全体 $I$ 上」**：若存在 $i_{0} \in I \setminus \operatorname{dom} f$，由 $A_\{i_{0}\} \ne \emptyset$ 取 $a \in A_\{i_{0}\}$，则

$$f' = f \cup \{ (i_0, a) \}$$

仍是 $\mathcal{F}$ 中的元素（$i_{0} \notin \operatorname{dom} f$，不破坏函数性），且 $f \subset f'$ —— 与 $f$ 的极大性矛盾。故 $\operatorname{dom} f = I$。

**⑤** 于是 $f : I \to \bigcup _\{i \in I\} A_i$ 且 $f(i) \in A_i$ 对一切 $i$ 成立，即 $f$ 是这族集合的选择函数。由族的任意性，AC 成立。∎

> 「按包含序取极大元，再证明它已经没法再大」—— 这是用佐恩引理造存在性对象的典型手法。

#### 佐恩引理 ⟹ 每个向量空间有基　`imp.zorn-to-basis`
*佐恩引理 $\implies$ 每个向量空间有基*

设 $V \ne 0$ 是域 $K$ 上的向量空间，并给定线性无关集 $S_{0} \subseteq V$。令

$$\mathcal{A} = \{ S \subseteq V : S \supseteq S_0\text{ 且} S\text{ 线性无关} \}$$

按包含关系 $\subseteq$ 排序。

1. **$\mathcal{A} \ne \emptyset$**：$S_{0} \in \mathcal{A}$。

2. **每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{A}$ 是 $\subseteq$链，令 $U = \bigcup \mathcal{D}$。要证 $U$ 线性无关，只需证 $U$ 的每个有限子集线性无关：取有限子集 $\{v_{1}$ …$v_{n}\} \subseteq U$，每个 $v_{i}$ 属于某个 $D_{i} \in \mathcal{D}$；$\mathcal{D}$ 是链且只有有限多个 $D_{i}$，故其中有一个最大的 $D$ 包含全部 $v_{i}$，即 $\{v_{1}$ …$v_{n}\} \subseteq D$。而 $D$ 线性无关，故它的子集 $\{v_{1}$ …$v_{n}\}$ 也线性无关。因此 $U$ 线性无关，$U \in \mathcal{A}$，它是 $\mathcal{D}$ 的上界。

3. 由佐恩引理，$\mathcal{A}$ 有极大元 $B$。$B$ 是含 $S_{0}$ 的线性无关集，且在「含 $S_{0}$ 的线性无关集」中极大。

4. **$B$ 生成 $V$**：若存在 $v \in V$ 不在 $B$ 的张成空间 span(B) 中，则 $B \cup \{v\}$ 仍线性无关（否则 $v$ 可写成 $B$ 中有限多个向量的线性组合，与 $v \notin \operatorname{span}(B)$ 矛盾），且严格大于 $B$，与 $B$ 的极大性矛盾。故 $\operatorname{span}(B) = V$，即 $B$ 是 $V$ 的基。取 $S_{0} = \emptyset$ 得「$V$ 有基」。∎

> 同样的套路可以证明：每个环有极大理想、每个域上每个模有极大无关组、每个偏序集有极大反链。

#### 紧 ⟹ 列紧　`imp.compact-seqcompact`
*紧 $\implies$ 列紧*

设 $\{x_{n}\}$ 是 $X$ 中的序列。反证：假设它没有收敛的子列。

**① 点集 $\{x_{n} : n \in \mathbb{N}\}$ 是闭的。** 任取 $y$ 不在这个点集中。若 $y$ 是某个 $x_{n}$，那 $y$ 显然不在余集里；以下设 $y \notin \{x_{n}\}$。由于 $\{x_{n}\}$ 没有收敛子列，$\{x_{n}\}$ 中任何子列都不趋于 $y$，于是存在 $\varepsilon > 0$ 使 $B(y, \varepsilon )$ 中只含**有限个** $x_{n}$（否则可以挑出趋于 $y$ 的子列）。删掉这有限多个点，就得到一个含 $y$ 的开球不碰 $\{x_{n}\}$。故余集开，$\{x_{n}\}$ 闭。

**② 每个 $x_{n}$ 有一个只含有限多个 $x_{m}$ 的开邻域。** $x_{n}$ 自己也被排除在子列之外，同上可得。

**③ 造一个开覆盖。** 取

$$\mathcal{U} = \{ U_n : n \in \mathbb{N} \} \cup \{ X \setminus \{x_n : n \in \mathbb{N}\} \}$$

其中 $U_{n}$ 是 ② 中给 $x_{n}$ 的那个邻域（只含有限个 $x_{m}$）。再补上闭集的余集，$\mathcal{U}$ 就是 $X$ 的开覆盖。

**④ 由紧性取有限子覆盖** $\mathcal{V} \subseteq \mathcal{U}$。若 $\mathcal{V}$ 包含那个余集，则没盖住任何 $x_{n}$；若只含有限个 $U_{n}$，而每个 $U_{n}$ 只含有限个 $x_{m}$，则 $\mathcal{V}$ 总共只盖住**有限多个** $x_{m}$ —— 与 $\{x_{n}\}$ 是无限集矛盾（没有收敛子列迫使它无限）。

故 $\{x_{n}\}$ 必有收敛子列，$X$ 列紧。∎

> 只有这一步不需要选择公理。

#### 列紧 ⟹ 全有界　`imp.seqcompact-totbdd`
*列紧 $\implies$ 全有界*

证明逆否：若 $X$ 不全有界，则存在一个没有收敛子列的序列。

**① 不全有界给了我们一个「一致」的正数。** $X$ 不全有界，意思是存在某个 $\varepsilon _{0} > 0$，使 $X$ **不能**被有限个半径 $\varepsilon _{0}$ 的球盖住。

**② 递归地挑点。** 取 $x_{1} \in X$ 任意。已取好 $x_{1}$ …$x_{n}$ 后，有限个球 $B(x_{1}, \varepsilon _{0})$ …$B(x_{n}, \varepsilon _{0})$ 盖不住 $X$，所以可再取

$$x_{n+1} \in X \setminus \bigcup_{i=1}^{n} B(x_i, \varepsilon_0)$$

于是任何两个不同的项都满足 $m \ne n \implies d(x_m, x_n) \ge \varepsilon_0$

**③ 它没有收敛子列。** 任何子列中任意两项距离都 $\ge \varepsilon _{0}$，所以它不是 Cauchy 列；而度量空间里收敛必 Cauchy，故它不收敛。

**④** 于是 $X$ 不列紧。取逆否，得列紧 $\implies$ 全有界。∎

$>$ ⚠ ② 是「取了一个点才能决定下一个点在哪」的递归选取，用的是**相依选择公理 DC**（比 AC 弱，但仍是选择原理）。这是整段里唯一实质用到选择的地方。

> 顺带得到一个常用的推论：**列紧 $\implies$ 有界**（因为全有界 $\implies$ 有界）。

#### 列紧 ⟹ 完备　`imp.seqcompact-complete`
*列紧 $\implies$ 完备*

设 $X$ 列紧，$\{x_{n}\}$ 是 $X$ 中的 Cauchy 列。

**①** 由列紧，$\{x_{n}\}$ 有收敛子列 $x_\{n_{k}\} \to x \in X$。

**② Cauchy 列只要有收敛子列，就整体收敛到同一个极限**：给定 $\varepsilon > 0$，取 $N$ 使 $m, n \ge N$ 时 $d(x_{m}, x_{n}) < \varepsilon /2$；再取 $K$ 使 $k \ge K$ 时 $n_{k} \ge N$ 且 $d(x_\{n_{k}\}, x) < \varepsilon /2$。于是对 $n \ge N$，取 $k \ge K$ 使 $n_{k} \ge N$，得

$$d(x_n, x) \le d(x_n, x_{n_k}) + d(x_{n_k}, x) < \varepsilon/2 + \varepsilon/2 = \varepsilon$$

故 $x_{n} \to x$。所以 $X$ 完备。∎

> 和「紧 $\implies$ 完备」是同一个套路，只是把「紧」换成它的直接推论「列紧」。

#### 列紧 ⟹ 紧　`imp.seqcompact-compact`
*列紧 $\implies$ 紧*

用**反证 + 一串不断缩小的「坏球」**。设 $X$ 列紧。

**① $X$ 全有界** —— 用上面那条箭头「列紧 $\implies$ 全有界」。

**② 造嵌套的坏球。** 设 $\mathcal{U}$ 是 $X$ 的开覆盖，且它**没有**有限子覆盖。由全有界，$X$ 能被有限个半径 1 的开球盖住；其中必有一个球不能被 $\mathcal{U}$ 的有限多个成员盖住 —— 否则把每个球各自的有限覆盖并起来，就得到 $\mathcal{U}$ 的一个有限子覆盖。称这样的球为**坏球**，取一个记作 $B_{1}$。

再把 $B_{1}$ 用有限个半径 1/2 的球盖住（$B_{1} \subseteq X$，全有界性对它同样管用），其中必有一个坏球 $B_{2} \subseteq B_{1}$。如此继续，得到

$$B_1 \supseteq B_2 \supseteq B_3 \supseteq \cdots, \quad  B_k\text{ 的半径} \le 1/k, \quad \text{ 每个} B_k\text{ 都是坏的}$$

（每一步都只是在**有限**多个球里挑一个，可以规定「取编号最小的那个」，所以这里不动用选择公理。）

**③ 取点，得到 Cauchy 列。** 取 $x_{k} \in B_{k}$。由嵌套与半径趋于 0，对 $m \le n$ 有 $x_{m}, x_{n} \in B_{m}$ 而 $B_{m}$ 的半径 $\le 1/m$，于是

$$d(x_m, x_n) \le 2/m\quad  \implies\quad  \{x_k\}\text{ 是} Cauchy\text{ 列}$$

**④** 由列紧它有子列收敛到某点 $x \in X$；Cauchy 列一旦有收敛子列就整体收敛，故 $x_{k} \to x$。

**⑤ 收尾。** $x$ 落在某个 $U \in \mathcal{U}$ 中。$U$ 开，故存在 $r > 0$ 使 $B(x, r) \subseteq U$。取 $k$ 充分大，使 $1/k < r/2$ 且 $d(x_{k}, x) < r/2$；则对任意 $y \in B_{k}$，

$$d(y, x) \le d(y, x_k) + d(x_k, x) < 1/k + r/2 < r$$

即 $B_{k} \subseteq B(x, r) \subseteq U$。于是 $B_{k}$ 被 $\mathcal{U}$ 的**一个**成员盖住了，与「$B_{k}$ 是坏球」矛盾。

故 $\mathcal{U}$ 必有有限子覆盖，$X$ 紧。∎

> 「坏球」这一招的直觉是：让一串被架空的小球缩到一个极限点，再用极限点的开邻域一口吞掉它。整段只用全有界，没用选择公理。

#### 紧 ⟹ 完备　`imp.compact-complete`
*紧 $\implies$ 完备*

设 $X$ 紧，$\{x_{n}\}$ 是 $X$ 中的 Cauchy 列。要证它收敛。

**①** 由「紧 $\implies$ 列紧」（见那条箭头），$\{x_{n}\}$ 有收敛子列 $x_\{n_{k}\} \to x \in X$。

**② Cauchy 列只要有收敛子列就整体收敛到同一个极限**：给定 $\varepsilon > 0$，取 $N_{1}$ 使 $m, n \ge N_{1}$ 时 $d(x_{m}, x_{n}) < \varepsilon /2$；取 $K$ 使 $n_{k} \ge N_{1}$ 且 $d(x_\{n_{k}\}, x) < \varepsilon /2$ 对 $k \ge K$ 成立。则对 $n \ge N_{1}$，取一个 $k \ge K$ 使 $n_{k} \ge N_{1}$，得

$$d(x_n, x) \le d(x_n, x_{n_k}) + d(x_{n_k}, x) < \varepsilon/2 + \varepsilon/2 = \varepsilon$$

故 $x_{n} \to x \in X$。所以 $X$ 完备。∎

> 关键引理：「Cauchy 列 + 有一个收敛子列 $\implies$ 收敛」，这在任何度量空间里都对。

#### 紧 ⟹ 全有界　`imp.compact-totbdd`
*紧 $\implies$ 全有界*

给定 $\varepsilon > 0$。考虑开球族

$$\mathcal{U} = \{ B(x, \varepsilon) : x \in X \}$$

它显然是 $X$ 的开覆盖（每个 $x$ 都被 $B(x, \varepsilon )$ 含住）。由 $X$ 紧，存在有限子覆盖：

$$X = B(x_1, \varepsilon) \cup \cdots \cup B(x_n, \varepsilon)$$

即 $\{x_{1}$ …$x_{n}\}$ 是一个有限的 $\varepsilon$网。由 $\varepsilon > 0$ 任意，$X$ 全有界。∎

$>$ 注意这条证明只用了「开球盖住自己」这一点 —— 它说明紧 $\implies$ 全有界几乎不需要任何技术。真正难的方向是下一条。

#### 完备 + 全有界 ⟹ 列紧　`imp.complete-totbdd-seqcompact`
*完备 + 全有界 $\implies$ 列紧（对角线法）*

设 $X$ 完备且全有界，$\{x_{n}\}$ 是 $X$ 中任一序列。要抽出一个收敛子列。

**① 抽一个「直径越来越小」的子列。** 对 $k = 1, 2, 3$ … 依次操作：由全有界，$X$ 能被有限个半径 1/k 的球盖住，于是**其中一个球含有当前子列中的无穷多项**（抽屉原理：有限个球盖住无穷多项，必有一个球含无穷多项）。把子列限制到这个球里。

这样得到一串子列

$$\{x_n\} \supseteq \{x^{(1)}_n\} \supseteq \{x^{(2)}_n\} \supseteq \cdots$$

其中第 $k$ 个子列的项全部落在某个半径 1/k 的球内，因此它任意两项的距离 $< 2/k$。

**② 对角线。** 取 $y_{k} = x^\{(k)\}_{k}$（第 $k$ 个子列的第 $k$ 项）。则 $\{y_{k}\}$ 是 $\{x_{n}\}$ 的子列；且对 $k, l \ge K$，$y_{k}$ 与 $y_{l}$ 都是第 $K$ 个子列的项（下标 $\ge K$ 的项都在里面），故

$$d(y_k, y_l) < 2/K$$

于是 $\{y_{k}\}$ 是 Cauchy 列。

**③** 由 $X$ 完备，$\{y_{k}\}$ 收敛。于是 $\{x_{n}\}$ 有收敛子列，$X$ 列紧。∎

> ① 里「无穷多项落进某一个球」用到抽屉原理（有限情形，不需要选择）。② 的对角线抽取也不需要选择 —— 所有选取都由「取第 $k$ 个子列的第 $k$ 项」唯一确定。

#### 定义引用：「紧」→ 紧的三个等价刻画　`def-link.compact-theorem`

「紧的三个等价刻画」的陈述里用到了「紧」的定义。

#### 定义引用：「列紧」→ 紧的三个等价刻画　`def-link.seqcompact-theorem`

同上，用到了「列紧」。

#### 定义引用：「完备」→ 紧的三个等价刻画　`def-link.complete-theorem`

同上，用到了「完备」。

#### 定义引用：「全有界」→ 紧的三个等价刻画　`def-link.totbdd-theorem`

同上，用到了「全有界」。

#### 定义引用：「紧」→ 紧子集是闭的　`def-link.compact-closed`

命题「紧子集是闭的」用到了紧的定义。

#### 定义引用：「紧」→ 子集的紧性刻画　`def-link.compact-subset-equiv`

子集的紧性刻画用到了紧的定义。

#### 定义引用：「全有界」→ 子集的紧性刻画　`def-link.totbdd-subset-equiv`

同上，用到了全有界。

#### 定义引用：「完备」→ 子集的紧性刻画　`def-link.complete-subset-equiv`

⚠ 这条命题的**前提**就是「$X$ 完备」，所以它引用完备的定义。

#### 环与代数 + 单调类 ⟹ 环 → σ-环 的判据　`imp.ring-monotone-sigma`
*环 + 单调类 $\implies$ σ-环*

设 $\mathfrak{A}$ 是环，且是单调类。要证它对**可数并**封闭。

**① 先换成不交并。** 给定 $A_{1}, A_{2}$ … $\in \mathfrak{A}$，令

$$B_n = A_n \setminus (A_1 \cup \cdots \cup A_{n-1})$$

因为 $\mathfrak{A}$ 是环（对有限并、对差封闭），每个 $B_{n} \in \mathfrak{A}$；而且 $B_{n}$ 两两不交，并且 $\bigcup B_{n} = \bigcup A_{n}$。所以只需证 $\mathfrak{A}$ 对**可数不交并**封闭。

**② 用单调性。** 若 $B_{n}$ 两两不交，则部分并 $C_n = B_1 \cup \cdots \cup B_n$ 是递增列，且 $C_{n} \in \mathfrak{A}$（环对有限并封闭）。由 $\mathfrak{A}$ 是单调类，

$$\bigcup_n C_n = \bigcup_n B_n = \bigcup_n A_n \in \mathfrak{A}$$

故 $\mathfrak{A}$ 是可数并封闭的 $\sigma$环。反向（$\sigma$环 $\implies$ 单调类）明显，因为递增并、递减交都是可数并/交的特例。∎

> 这条定理把「$\sigma$」这件事等价地翻译成了「对两种单调极限封闭」，单调类定理正是靠它工作的。

#### 定义引用：「基本类」→ 集合族的基本性质　`def-link.fundamental-props`

性质 (1)(5) 用的就是基本类的定义。

#### 定义引用：「环与代数」→ 集合族的基本性质　`def-link.ring-props`

性质 (2)(3) 是在环 / 代数 $/ \sigma$代数的定义上做的。

#### 定义引用：「环与代数」→ 环 → σ-环 的判据　`def-link.ring-monotone-thm`

定理的前提与结论都用了「环 $/ \sigma$环」的定义。

#### 定义引用：「单调类」→ 环 → σ-环 的判据　`def-link.monotone-thm`

同上，还用了单调类的定义。

#### 定义引用：「生成的 σ-代数」→ 单调类定理　`def-link.generated-monotone`

单调类定理的陈述里出现 $\mathcal{M}(\mathcal{E})$ 与 $\mathfrak{m}(\mathcal{E})$，正是上一条定义。

#### 定义引用：「单调类」→ 单调类定理　`def-link.monotone-class-thm`

并用到了单调类的定义。

#### 定义引用：「生成的 σ-代数」→ Borel σ-代数　`def-link.generated-borel`

$Borel \sigma$代数就是把「由开集生成」用了一遍。

#### 定义引用：「生成的 σ-代数」→ 积 σ-代数　`def-link.generated-product`

积 $\sigma$代数也是「生成」出来的。

#### 定义引用：「积 σ-代数」→ 可数积的生成集　`def-link.product-generated`

这条命题比较「柱集生成」与「矩形生成」。

#### 定义引用：「积 σ-代数」→ 积 σ-代数的生成基　`def-link.product-base`

这条命题说的就是把每一维的 $\mathcal{M}_\alpha$ 换成生成元后，积 $\sigma$代数不变。

#### 定义引用：「生成的 σ-代数」→ 积 σ-代数的生成基　`def-link.generated-product-base`

整条命题就是在操作「生成」。

#### 定义引用：「积 σ-代数」→ 可数积的 Borel 代数　`def-link.product-borel`

推论里左边是积 $\sigma$代数。

#### 定义引用：「Borel σ-代数」→ 可数积的 Borel 代数　`def-link.borel-borelproduct`

推论里右边是 $Borel \sigma$代数。

#### 定义引用：「环与代数」→ σ-环　`def-link.sigmaring-ring`

$\sigma$环就是把「环」里的有限并升级成可数并，其余（对差封闭）照旧。

#### 定义引用：「σ-环」→ σ-代数　`def-link.sigmaalgebra-sigmaring`

$\sigma$代数 $= \sigma$环 $X \in \mathfrak{A}$，只多这一条。

#### 定义引用：「σ-代数」→ 环 → σ-环 的判据　`def-link.sigmaalgebra-ringmonotone`

这条判据的结论是「$\mathfrak{A}$ 是 $\sigma$环」；若 $\mathfrak{A}$ 还含 $X$，就一并是 $\sigma$代数。

#### 定义引用：「σ-代数」→ 单调类定理　`def-link.sigmaalgebra-monotonethm`

单调类定理的两端，一个是由 $\mathcal{E}$ 生成的 $\sigma$代数 $\mathcal{M}(\mathcal{E})$、一个是单调类 $\mathfrak{m}(\mathcal{E})$。

#### 定义引用：「σ-代数」→ 生成的 σ-代数　`def-link.sigmaalgebra-generated`

「生成的 $\sigma$代数」＝ 一切包含 $\mathcal{E}$ 的 $\sigma$代数之交。

#### 定义引用：「σ-代数」→ Borel σ-代数　`def-link.sigmaalgebra-borel`

$Borel \sigma$代数就是「由开集这个生成元生成的 $\sigma$代数」。

#### 定义引用：「σ-代数」→ 积 σ-代数　`def-link.sigmaalgebra-product`

积 $\sigma$代数也只是 $\sigma$代数，生成元换成「矩形」而已。

#### 测度 ⟹ 测度的基本性质　`imp.measure-props`
*测度 $\implies$ 单调 / 次可加 / 上下连续*

设 $\mu$ 是测度。

**(a) 单调。** 设 $E \subseteq F$。则 $F = E \cup (F \setminus E)$，两项不交，故 $\mu (F) = \mu (E) + \mu (F \setminus E) \ge \mu (E)$（取值非负）。

**(b) 次可加。** 令 $F_{j} = E_{j} \setminus (E_{1} \cup \cdots \cup E_\{j-1\})$，则 $F_{j}$ 两两不交、$\bigcup F_{j} = \bigcup E_{j}$ 且 $F_{j} \subseteq E_{j}$。由可数可加与 (a)，

$$\mu(\bigcup_j E_j) = \mu(\bigcup_j F_j) = \sum_j \mu(F_j) \le \sum_j \mu(E_j)$$

**(c) 下连续。** 设 $E_{1} \subseteq E_{2} \subseteq \cdots$。令 $A_{1} = E_{1}$，$A_{j} = E_{j} \setminus E_\{j-1\}$（$j \ge 2$），则 $A_{j}$ 两两不交且 $\bigcup A_{j} = \bigcup E_{j}$。由可数可加，

$$\mu(\bigcup_j E_j) = \sum_j \mu(A_j) = \lim_{n\to\infty} \sum_{j=1}^{n} \mu(A_j) = \lim_{n\to\infty} \mu(E_n)$$

**(d) 上连续。** 设 $E_{1} \supseteq E_{2} \supseteq \cdots$ 且 $\mu (E_{1}) < \infty$。令 $F_{j} = E_{1} \setminus E_{j}$，则 $F_{1} \subseteq F_{2} \subseteq \cdots$ 且 $\bigcup F_{j} = E_{1} \setminus \bigcap E_{j}$。由 (c) 与 (a)，

$$\mu(E_1) - \mu(\bigcap_j E_j) = \mu(E_1 \setminus \bigcap_j E_j) = \lim_j \mu(F_j) = \lim_j ( \mu(E_1) - \mu(E_j) )$$

因为 $\mu (E_{1}) < \infty$ 是个有限数，可以从两边同时减掉，得 $\mu (\bigcap E_{j}) = \lim \mu (E_{j})$。∎

$>$ ⚠ (d) 里的「$\mu (E_{1}) < \infty$」正是为了让 $\mu (E_{1})$ 能被减掉。没有它，等式会退化成 $\infty = \infty$。

#### 预测度 ⟹ 由预测度诱导外测度　`imp.premeasure-to-outer`
*预测度 $\implies$ 诱导的外测度*

设 $\mathfrak{A}$ 是代数，$\mu _{0}$ 是 $\mathfrak{A}$ 上的预测度。对 $A \subseteq X$ 令

$$\mu^*(A) = \inf \{ \sum_j \mu_0(E_j) : E_j \in \mathfrak{A}, A \subseteq \bigcup_j E_j \}$$

**① 定义合理**：$A \subseteq X$ 且 $X \in \mathfrak{A}$，所以总有覆盖，inf 是对非空集合取。

**② $\mu^{*}(\emptyset ) = 0$**：取 $E_{1} = \emptyset$、$E_{2} = E_{3} = \cdots = \emptyset$，则 $\sum \mu _{0}(E_{j}) = 0$，故 $0 \le \mu^{*}(\emptyset ) \le 0$。

**③ 单调**：$A \subseteq B$ 时，$B$ 的每个覆盖也是 $A$ 的覆盖，故 $A$ 的下确界集合更大，$\mu^{*}(A) \le \mu^{*}$(B)。

**④ 可数次可加**：设 $A_{j} \subseteq X$。若某个 $\mu^{*}(A_{j}) = \infty$ 则不等式平凡；否则给定 $\varepsilon > 0$，对每个 $j$ 取 $\mathfrak{A}$ 中的覆盖 $\{E_\{j,k\}\}_{k}$ 使

$$\sum_k \mu_0(E_{j,k}) < \mu^*(A_j) + (\varepsilon/2)^j$$

把 {E_{j,k}}_{j,k} 按 (j, k) 之外再用双射排成一列（可数个可数集之并仍可数），它是 $\bigcup _{j} A_{j}$ 的一个覆盖，于是

$$\mu^*(\bigcup_j A_j) \le \sum_{j,k} \mu_0(E_{j,k}) \le \sum_j \mu^*(A_j) + \varepsilon$$

令 $\varepsilon \to 0$ 即得。∎

$>$ ⚠ ④ 的每一步都只需取**一个**覆盖 —— 这用的是 $\mathbb{N}$ 上的可数选择（可以从自然数的良序性显式给出），不需要完整的 AC。

#### 外测度 + μ*-可测集 ⟹ Carathéodory 定理　`imp.outer-carath`
*外测度 + 可切集 $\implies$ σ-代数与完备测度*

设 $\mu^{*}$ 是外测度，$\mathcal{M} = \{ A : \forall E, \mu^{*}(E) = \mu^{*}(E\cap A) + \mu^{*}(E\cap A^{c}) \}$。

**① $\mathcal{M}$ 是代数。** 条件关于 $A$ 与 $A^{c}$ 对称，故 $A \in \mathcal{M} \implies A^{c} \in \mathcal{M}$；$\emptyset$ 与 $X$ 显然在 $\mathcal{M}$ 中。若 $A, B \in \mathcal{M}$，要证 $A \cup B \in \mathcal{M}$：对任意 $E$，把 $E$ 依 $A$ 切开、再依 $B$ 切开，

$$\mu^*(E) = \mu^*(E\cap A) + \mu^*(E\cap A^c) = \mu^*(E\cap A\cap B) + \mu^*(E\cap A\cap B^c) + \mu^*(E\cap A^c\cap B) + \mu^*(E\cap A^c\cap B^c)$$

而右边前三项合起来 $\ge \mu^{*}(E\cap (A\cup B))$（次可加），最后一项 $= \mu^{*}(E\cap (A\cup B)^{c})$。反向不等式由次可加自动成立，故 $A \cup B \in \mathcal{M}$。

**② $\mathcal{M}$ 是 $\sigma$代数。** 设 $A_{j} \in \mathcal{M}$ 两两不交，$A = \bigcup A_{j}$。对任意 $E$ 归纳得到

$$\mu^*(E \cap \bigcup_{j\le n} A_j) = \sum_{j\le n} \mu^*(E \cap A_j)$$

（每一步用 $A_{n}$ 把 $E$ 切开，丢掉的那块弃掉即可。）令 $n \to \infty$，用次可加性与单调性，

$$\mu^*(E) = \mu^*(E\cap A) + \mu^*(E\cap A^c)$$

故 $A \in \mathcal{M}$。结合 ①，$\mathcal{M}$ 是可数并封闭的代数，即 $\sigma$代数（可数不交并由 ②，一般可数并再换成不交并）。

**③ $\mu^{*}|_\mathcal{M}$ 可加。** 在 ② 里取 $E = X$、$A$ 换成两两不交的 $A_{j}$，得 $\mu^{*}(\bigcup A_{j}) = \sum \mu^{*}(A_{j})$，这正是可数可加；$\mu^{*}(\emptyset ) = 0$ 由外测度定义给出。

**④ 完备。** 设 $\mu^{*}(A) = 0$，$B \subseteq A$。对任意 $E$，由单调性与次可加，

$$\mu^*(E) \ge \mu^*(E \cap B^c) \ge \mu^*(E) - \mu^*(E \cap B) \ge \mu^*(E) - \mu^*(A) = \mu^*(E)$$

故 $\mu^{*}(E) = \mu^{*}(E\cap B) + \mu^{*}(E\cap B^{c})$（注意 $\mu^{*}(E\cap B) \le \mu^{*}(A) = 0$），即 $B \in \mathcal{M}$。故 $\mu^{*}|_\mathcal{M}$ 完备。∎

$>$ 这一条是纯验证，但要验的东西不少，上面把要点写全了。

#### Carathéodory 定理 + 由预测度诱导外测度 ⟹ 预测度还原　`imp.carath-extension`
*Carathéodory + 预测度 $\implies$ 原代数上的值不变*

设 $\mathfrak{A}$ 是代数，$\mu _{0}$ 是 $\mathfrak{A}$ 上的预测度，$\mu^{*}$ 是由 $\mu _{0}$ 诱导的外测度，$\mathcal{M}$ 是全体 $\mu^{*}$-可测集。

**① $\mu^{*}|_\mathfrak{A} \le \mu _{0}$。** 取 $A \in \mathfrak{A}$，则 $A \subseteq A$ 是一个（只含一层的）覆盖，故

$$\mu^*(A) \le \mu_0(A) + 0 + 0 + \cdots = \mu_0(A)$$

**② $\mu^{*}|_\mathfrak{A} \ge \mu _{0}$。** 设 $\{E_{j}\} \subseteq \mathfrak{A}$ 是 $A$ 的覆盖。令 $F_{j} = E_{j} \setminus (E_{1} \cup \cdots \cup E_\{j-1\})$，则 $F_{j} \in \mathfrak{A}$ 两两不交且 $\bigcup F_{j} \supseteq A$、$F_{j} \subseteq E_{j}$。于是

$$\mu_0(A) = \mu_0( \bigcup_j (A \cap F_j) ) = \sum_j \mu_0(A \cap F_j) \le \sum_j \mu_0(F_j) \le \sum_j \mu_0(E_j)$$

（第一个等号用 $A$ 是那些不交集合之并；第二个用 $\mu _{0}$ 可数可加；不等号用单调性。）对所有覆盖取下确界得 $\mu _{0}(A) \le \mu^{*}$(A)。

**③ $\mathfrak{A} \subseteq \mathcal{M}$。** 设 $A \in \mathfrak{A}$，$E \subseteq X$，要证 $\mu^{*}(E) \ge \mu^{*}(E\cap A) + \mu^{*}(E\cap A^{c})$。给定 $\varepsilon > 0$，取 $\mathfrak{A}$ 中 $\{E_{j}\}$ 覆盖 $E$ 使

$$\sum_j \mu_0(E_j) < \mu^*(E) + \varepsilon$$

由 ②，$\mu _{0}(E_{j}) = \mu^{*}(E_{j})$；又 $\mathfrak{A}$ 是代数，$E_{j} \cap A$ 与 $E_{j} \cap A^{c}$ 都在 $\mathfrak{A}$ 中且不交、并为 $E_{j}$，于是

$$\mu^*(E \cap A) + \mu^*(E \cap A^c) \le \sum_j \mu_0(E_j \cap A) + \sum_j \mu_0(E_j \cap A^c) = \sum_j \mu_0(E_j) < \mu^*(E) + \varepsilon$$

令 $\varepsilon \to 0$ 即得。所以 $\mathfrak{A} \subseteq \mathcal{M}$；而 $\mathcal{M}$ 是 $\sigma$代数（Carathéodory），故 $\mathcal{M}(\mathfrak{A}) \subseteq \mathcal{M}$。∎

#### 预测度还原 ⟹ 扩张的唯一性　`imp.carath-unique`
*扩张的最大性与 σ-有限唯一性*

沿用上一条的记号，设 $\nu$ 是 $\mathcal{M}(\mathfrak{A})$ 上另一个扩张 $\mu _{0}$ 的测度。

**① $\nu \le \mu^{*}$。** 设 $E \in \mathcal{M}(\mathfrak{A})$，$\{E_{j}\} \subseteq \mathfrak{A}$ 是 $E$ 的覆盖。由 $\nu$ 的次可加性与 $\nu |_\mathfrak{A} = \mu _{0}$，

$$\nu(E) \le \sum_j \nu(E_j) = \sum_j \mu_0(E_j)$$

对所有这样的覆盖取下确界，右边给出 $\mu^{*}(E) = \mu (E)$。故 $\nu (E) \le \mu (E)$。

**② $\mu (E) < \infty$ 时取等。** 此时 $n = \nu (E)$ 有限（因为 $\nu (E) \le \mu (E) < \infty$）—— 但要注意 $\nu \le \mu$ 只在一侧，所以直接两边各取补集：$E$ 可测意味着对任意 $F \subseteq X$ 有 $\mu (F) = \mu (F\cap E) + \mu (F\setminus E)$，取 $F = X$ 得 $\mu (X) = \mu (E) + \mu (X\setminus E)$，**这一步要求 $\mu (X) < \infty$** 才好逐项比较。一般情形下改用 $\mathcal{M}(\mathfrak{A})$ 中 $\mu$ 有限的集合 $E_{n} \uparrow X$ 作近似（见下）。

**③ $\sigma$有限时唯一。** 取 $\mu$有限的可测集 $E_{n} \uparrow X$（$\sigma$有限的定义）。对每个 $E_{n}$，用 ② 的论证于 $E_{n} \cap E$ 上得 $\nu (E \cap E_{n}) = \mu (E \cap E_{n})$；令 $n \to \infty$，两侧分别用下连续性（$\nu$ 与 $\mu$ 都是测度）得到 $\nu (E) = \mu (E)$。

故 $\sigma$有限时 $\nu = \mu$，扩张唯一。∎

$>$ ⚠ ② 里 $\mu (E) < \infty$ 的等号之所以能成立，用的是「在有限测度的集合上 $\mu - \nu$ 也是测度」这一点。$\mathcal{M}(\mathfrak{A})$ 上会出现无穷值，所以只能逐块比较 —— 这正是 $\sigma$有限必不可少的原因。

#### F 给出的预测度 + 扩张的唯一性 ⟹ F ↔ Borel 测度　`imp.ls-premeasure-to-measure`
*F 的预测度 $\implies \mathbb{R}$ 上的 Borel 测度*

设 $F$ 递增右连续。由前一条命题，$\mu _{0}((a, b]) = F(b) - F(a)$ 扩充成半开区间生成的代数 $\mathfrak{A}$ 上的**预测度**。

**① 存在性。** 由 Carathéodory 扩张定理，$\mu _{0}$ 诱导的外测度限制在 $\mathcal{M}(\mathfrak{A})$ 上就是一个测度 $\mu _F$，且在 $\mathfrak{A}$ 上还原成 $\mu _{0}$。特别地 $\mu _F((a, b]) = F(b) - F(a)$。

**② 它是 Borel 测度。** 每个开区间 (a, b) 是可数个 $(a, b - 1/n]$ 之并，故属于 $\mathcal{M}(\mathfrak{A})$；于是 $\mathcal{M}(\mathfrak{A})$ 包含 $\mathbb{R}$ 的全体开集（$\mathbb{R}$ 的开集是可数个开区间之并），从而 $\mathfrak{B}_\mathbb{R} \subseteq \mathcal{M}(\mathfrak{A})$。

**③ 唯一性。** $F$ 递增实值 $\implies \mu _F((-n, n]) = F(n) - F(-n) < \infty$，所以 $\mu _F$ 是 $\sigma$有限的（$\mathbb{R} = \bigcup _{n} (-n, n]$）。由 $\sigma$有限时的唯一性，扩张唯一。

**④ 「差常数」的来源。** $\mu _F$ 只看增量：把 $F$ 换成 F + c，对一切 (a, b] 有 $F(b) - F(a)$ 不变，故预测度不变、扩张不变。反过来若 $\mu _F = \mu _G$，则对一切 $a < b$，$F(b) - F(a) = G(b) - G(a)$，固定 $a$ 即得 $F - G$ 是常数。∎

#### 零集与完备 ⟹ 完备化定理　`imp.completion`
*零集 $\implies$ 完备化*

设 $(X, \mathcal{M}, \mu )$ 是测度空间，$\bar{\mathcal{M}} = \{ E \cup F : E \in \mathcal{M}, F \subseteq N$ 对某个零集 N }。

**① $\bar{\mathcal{M}}$ 是 $\sigma$代数。** 含 $X$（$X \in \mathcal{M}$）。对可数并：$\bigcup (E_{j} \cup F_{j}) = (\bigcup E_{j}) \cup (\bigcup F_{j})$，而 $\bigcup F_{j} \subseteq \bigcup N_{j}$ 是零集。对补：$E \cup F$ 的补是

$$(E \cup F)^c = (E^c \cap N^c) \cup (E^c \cap N \setminus F)$$

第一块属于 $\mathcal{M}$，第二块含在零集 $N$ 里，故属于 $\bar{\mathcal{M}}$ 的形状。

**② $\bar{\mu}$ 良定义。** 设 $E_{1} \cup F_{1} = E_{2} \cup F_{2}$ 且 $F_{i} \subseteq N_{i}$（零集）。由 $E_{1} \subseteq E_{2} \cup N_{2}$ 得 $\mu (E_{1}) \le \mu (E_{2}) + 0$，反向同理，故 $\mu (E_{1}) = \mu (E_{2})$。

**③ $\bar{\mu}$ 是测度。** 把 $\mathcal{N}$ 中集合的子集归入「零的一部分」后，可数可加性与 $\mu$ 上的逐一对应（$E_{j}$ 部分可数可加、$F_{j}$ 部分含于零集）。

**④ 完备。** 若 $\bar{\mu}(E \cup F) = 0$，则 $\mu (E) = 0$，于是 $E \cup F \subseteq E \cup N$ 是零集的子集 —— 按 $\bar{\mathcal{M}}$ 的定义它当然还在 $\bar{\mathcal{M}}$ 里，即：**$\bar{\mathcal{M}}$ 中每个零集的子集都可测**。∎

#### 定义引用：「测度」→ 有限 / σ-有限 / 半有限　`def-link.measure-space`

有限 $/ \sigma$有限 / 半有限都是在测度的定义上追加条件。

#### 定义引用：「预测度」→ 由预测度诱导外测度　`def-link.premeasure-outer`

诱导外测度的公式里用的就是预测度。

#### 定义引用：「外测度」→ Carathéodory 定理　`def-link.outer-carath-thm`

Carathéodory 定理的起点是外测度。

#### 定义引用：「μ*-可测集」→ Carathéodory 定理　`def-link.carathmeasurable-thm`

定理里的 $\mathcal{M}$ 就是 $\mu^{*}$-可测集全体。

#### 定义引用：「测度」→ 完备化定理　`def-link.measure-completion`

完备化的构造完全依赖测度与零集。

#### 定义引用：「测度」→ Lebesgue–Stieltjes 测度　`def-link.measure-ls`

Lebesgue–Stieltjes 测度是一种 Borel 测度。

#### 定义引用：「Borel σ-代数」→ F ↔ Borel 测度　`def-link.borel-ls`

定理的结论是「Borel 测度」。

#### 定义引用：「零集与完备」→ 完备化定理　`def-link.null-completion`

完备化定理的定义里整段都在用「零集」。

#### 定义引用：「有限 / σ-有限 / 半有限」→ 半有限部分　`def-link.semifinite-measure-space`

半有限部分是针对「半有限」这个概念做的修补。

#### 定义引用：「测度」→ 测度的基本性质　`def-link.measure-basic-props`

这几条性质都是测度定义（可数可加）的直接推论。

#### 简单函数 + 简单函数逼近 ⟹ 可测函数的封闭性　`imp.measurable-limit`
*简单函数逼近 $\implies$ 可测函数在极限下封闭*

**① 上确界。** 设 $f_j$ 可测。要证 $\sup_j f_j$ 可测。由判定准则 (2)，只需对生成元 $(a, +\infty]$（$a \in \mathbb{R}$）验证：

$$(\sup_j f_j)^{-1}((a, +\infty]) = \bigcup_j f_j^{-1}((a, +\infty]) \in \mathcal{M}$$

是可数并，故可测。

**② 下确界。** $\inf_j f_j = -\sup_j(-f_j)$，而取负保持可测性，故 inf 也可测。

**③ 极限。** $\liminf_j f_j = \sup_n \inf_{j \ge n} f_j$，由 ①② 可测；同理 $\limsup$ 可测。当极限存在时两者相等，故极限可测。

**④ 和与积。** 先看 $f + g$：对任意 $a \in \mathbb{R}$，

$$\{f + g > a\} = \bigcup_{q \in \mathbb{Q}} ( \{f > q\} \cap \{g > a - q\} )$$

（左边 $\subseteq$ 右边：取有理数 $q$ 夹在 $a - g$ 与 $f$ 之间；反向显然。）右边是可数并交，故可测。积 $fg$ 由 $fg = ((f+g)^2 - f^2 - g^2) / 2$ 化归（对非负情形直接验证，一般情形先做正负部分分解）。

**⑤ 与简单函数的关系。** 上面 ①~④ 已经把「可测」做成了一个对极限与代数运算封闭的类；而简单函数逼近定理保证**每个非负可测函数都是一列简单函数的逐点极限**，所以这个类是「刚好够用」的：从简单函数出发，取极限就得到全部可测函数。∎

> 这条是把「sup 可测、max 可测、极限可测、和积可测」几条合并成的总纲 —— 单独看每一条都很碎，合起来才是它的分量。

#### 可测性的两条判定准则 ⟹ 连续 ⟹ Borel 可测　`imp.continuous-borel`
*连续 $\implies$ Borel 可测*

设 $f : X \to Y$ 连续，即每个开集的原像是开集。

由定义 $\mathfrak{B}_Y = \mathcal{M}(\{ U \subseteq Y : U\text{ 开} \})$，用判定准则 (2)：只需对生成元（开集）验证原像可测。对开集 $U$，$f^{-1}(U)$ 是 $X$ 中的开集，因而 $\in \mathfrak{B}_X$。故 $f$ 可测。∎

$>$ 注意这个坑：**这个论证对 $(\mathfrak{B}, \mathfrak{B})$ 成立，但对 $(\mathcal{L}, \mathcal{L})$ 不成立** —— 因为 $\mathcal{L}$ 并不由开集生成，它比 $\mathfrak{B}_\mathbb{R}$ 多了很多非 Borel 的零测集子集。

#### 完备化定理 ⟹ 完备化后可改在零集上　`imp.completion-measurable-function`
*完备化定理 $\implies$ 完备空间上的可测函数可改在零集上*

完备化 $(X, \bar{\mathcal{M}}, \bar{\mu})$ 相对 $(X, \mathcal{M}, \mu)$ 只多做了一件事：**把零集的子集也收进 $\sigma$代数**。所以两个 $\sigma$代数只在零集上不同。

先取 $f = \chi_E$：此时 $E = E' \cup F$，$E' \in \mathcal{M}$、$F$ 含于某个 $\mathcal{M}$零集，取 $g = \chi_{E'}$ 即有 $f = g$ a.e.。对 $\mathcal{M}$可测的简单函数显然成立（有限线性组合）。

一般情形取简单函数列 $\varphi_n \to f$，每个 $\varphi_n$ 在一个 $\bar{\mathcal{M}}$零集 $E_n$ 外等于某个 $\mathcal{M}$可测的 $\psi_n$。把 $N := \bigcup_n E_n$ 并起来（可数并仍是零集），令 $g := \lim_n \chi_{N^c} \cdot \varphi_n$ —— 它在 $N^c$ 上等于 $f$，且作为 $\mathcal{M}$可测函数的极限仍 $\mathcal{M}$可测。∎

#### 定义引用：「简单函数」→ 简单函数逼近　`def-link.lplus-simple-approx`

逼近定理的结论就是「可测函数是简单函数列的极限」。

#### 定义引用：「可测函数」→ 简单函数　`def-link.measurable-simple`

简单函数的定义里带着「可测」。

#### 定义引用：「可测函数」→ 可测性的两条判定准则　`def-link.measurable-criterion`

两条准则都是在可测定义上做的。

#### 定义引用：「积 σ-代数」→ 积空间与实虚部　`def-link.product-sigma-measurable`

这条命题的舞台是积 $\sigma$代数。

#### 定义引用：「可测函数」→ Lebesgue 可测　`def-link.lebesgue-measurable-def`

Lebesgue / Borel 可测只是把 $(\mathcal{M}, \mathcal{N})$ 取成具体的两对。

#### 定义引用：「Borel σ-代数」→ Lebesgue 可测　`def-link.borel-lebesgue-measurable`

Borel 可测用的是 $\mathfrak{B}_\mathbb{R}$ 与 $\mathfrak{B}_\mathbb{C}$。

#### 定义引用：「零集与完备」→ 完备性 ⟺ 不破坏可测性　`def-link.nullset-complete-measurable`

这条命题说的正是「完备性」这个概念在函数层面等价于什么。

#### 定义引用：「零集与完备」→ 完备化后可改在零集上　`def-link.completion-measurable-fn`

证明里全程在用零集。

#### 定义引用：「测度」→ 可测函数的封闭性　`def-link.measure-closure`

封闭性里的极限都是相对测度 $\mu$ 而言的。

#### 非负函数的积分 + 简单函数积分的性质 ⟹ 单调收敛定理　`imp.mct`
*非负积分的定义 $\implies$ 单调收敛定理*

**① 一个方向是免费的。** 由 $f_{n} \le f$ 与积分的单调性，$\int f_{n} \le \int f$，故

$$\lim_{n\to\infty} \int f_n \le \int f$$

所以只需证另一边。

**② 用一个简单函数从下面逼近 $f$。** 给定 $\varepsilon > 0$，由 $\int f$ 的定义（取上确界）存在简单函数 $\varphi$ 使

$$0 \le \varphi \le f, \quad  \int \varphi \ge \int f - \varepsilon$$

**③ 把 $\varphi$ 搬进 $E_{n}$。** 令 $E_n = \{x : f_n(x) \ge \varphi(x)\}$。因为 $f_{n} \uparrow f$ 且 $\varphi \le f$，集合列 $E_{n}$ 是递增的、且 $\bigcup_n E_n = X$。于是

$$\int f_n \ge \int_{E_n} f_n \ge \int_{E_n} \varphi$$

**④ 让 $n \to \infty$。** 由简单函数积分的性质 (d)，$A \mapsto \int_A \varphi d\mu$ 是 $\mathcal{M}$ 上的一个**测度**；把它用在递增列 $E_{n} \uparrow X$ 上，用测度的下连续性：

$$\lim_{n\to\infty} \int_{E_n} \varphi = \int_X \varphi = \int \varphi$$

所以存在 $N$ 使 $n > N$ 时 $\int_{E_n} \varphi > \int \varphi - \varepsilon$，从而

$$\int f_n \ge \int \varphi - \varepsilon \ge \int f - 2\varepsilon$$

**⑤ 收尾。** 对一切 $n > N$ 成立，故 $\lim_n \int f_n \ge \int f - 2\varepsilon$；令 $\varepsilon \to 0$ 得 $\lim_n \int f_n \ge \int f$。与 ① 合起来就是等号。∎

$>$ ⭐ 整段证明只用了两样东西：**简单函数积分的 (d)**（把 $A \mapsto \int _A \varphi$ 当作测度）和**积分的单调性**。单调性假设就是用来保证 ③ 里的 $E_{n}$ 递增到 $X$ 的。

> 「先拿一个简单函数从下面顶住 $f$，再让 $E_{n}$ 爬上去」—— 这个套路在 Fatou 引理里还会再用一次。

#### 单调收敛定理 ⟹ 逐项积分　`imp.termwise`
*MCT $\implies$ 逐项积分*

**① 先看两项。** 由非负性，$\{f_1 \wedge  n\}$、$\{f_2 \wedge  n\}$ 都是简单函数列的极限（简单函数逼近定理），于是

$$\int (f_1 + f_2) = \lim_{n\to\infty} \int (\varphi_n + \psi_n) = \int f_1 + \int f_2$$

其中用到了 MCT（把 $f_{1} + f_{2}$ 写成极限）与简单函数积分的可加性 (b)。

**② 归纳到有限项。** 逐次用 ① 得到

$$\int \sum_{n=1}^{N} f_n = \sum_{n=1}^{N} \int f_n$$

**③ 让 $N \to \infty$。** 部分和 $\sum_{n\le N} f_n$ 是 $L^{+}$ 中的**递增**列，极限正是 $\sum_{n=1}^{\infty} f_n$。对部分和列用一次 MCT：

$$\int \sum_{n=1}^{\infty} f_n = \lim_{N\to\infty} \int \sum_{n=1}^{N} f_n = \lim_{N\to\infty} \sum_{n=1}^{N} \int f_n = \sum_{n=1}^{\infty} \int f_n$$

∎

#### 单调收敛定理 ⟹ Fatou 引理　`imp.fatou`
*MCT $\implies$ Fatou 引理*

设 $g_n = \inf_{k \ge n} f_k$，则

$\cdot$ $g_n \le f_k$ 对一切 $k \ge n$ 成立，故 $\int g_n \le \inf_{k\ge n} \int f_k$；
$\cdot$ $\{g_n\}$ 是 $L^{+}$ 中的**递增**列（下确界取的集合越来越少），且 $\lim_n g_n = \liminf_k f_k$。

对递增列 $\{g_n\}$ 用 MCT：

$$\int \liminf_{n\to\infty} f_n = \int \lim_{n\to\infty} g_n = \lim_{n\to\infty} \int g_n \le \lim_{n\to\infty} \inf_{k \ge n} \int f_k = \liminf_{n\to\infty} \int f_n$$

∎

$>$ 整个证明就是把「liminf 定义成递增列的上确界」这件事翻译一遍 —— MCT 之外什么都没用。

> Fatou 就是 MCT 在「不单调」情形下的残留物：单调性换成了 liminf。

#### Fatou 引理 ⟹ 控制收敛定理　`imp.dct`
*Fatou $\implies$ 控制收敛定理*

设 $f_n \to f$ a.e.，$|f_n| \le g \in L^1$。

**① $f \in L^{1}$。** 由 $|f| = \lim|f_n| \le g$（a.e.）得 $f$ 可积。

**② 上界方向：$\limsup_n \int f_n \le \int f$。** 考虑 $g - f_n \ge 0$（因为 $|f_{n}| \le g$）。这列非负函数满足

$$g - f_n \to g - f\quad  \text{a.e.}$$

对它用 Fatou 引理：

$$\int (g - f) \le \liminf_n \int (g - f_n) = \int g - \limsup_n \int f_n$$

（最后一步是因为 $\liminf_{-a_n} = -\limsup a_n$。）移项即得 $\limsup_n \int f_n \le \int f$。

**③ 下界方向：$\liminf_n \int f_n \ge \int f$。** 同样对 $g + f_n \ge 0$ 用 Fatou：

$$\int (g + f) \le \liminf_n \int (g + f_n) = \int g + \liminf_n \int f_n$$

移项得 $\liminf_n \int f_n \ge \int f$。

**④** ②与③合起来 $\limsup \le \int f \le \liminf$，故极限存在且等于 $\int f$。∎

$>$ ⭐ 关键在于**控制函数提供的非负性**：$g \pm  f_n$ 都是非负的，于是 Fatou 可以直接用。没有 $g$，这一步就写不出来。
$>$ 移项之所以合法，是因为 $g$ 可积（$\int g < \infty$）—— 这正是「控制函数必须属于 $L^{1}$」而不能只是「有界」的原因。

#### 控制收敛定理 ⟹ 交换极限/导数与积分　`imp.differentiate-under-integral`
*DCT $\implies$ 在积分号下求极限与求导*

**(a)** 取任意 $t_n \to t_0$，令 $f_n(x) = f(x, t_n)$。由题设 $|f_n| \le g \in L^1$、且 $f_n \to f(x,t_0)$ 逐点，DCT 直接给出

$$F(t_n) = \int f_n \to \int f(\cdot, t_0) = F(t_0)$$

对一切序列 $t_{n}$ 成立，故 $\lim_{t\to t_0} F(t) = F(t_0)$。

**(b)** 取任意 $t_n \to t_0$，令

$$h_n(x) = (f(x, t_n) - f(x, t_0)) / (t_n - t_0)$$

则 $F'(t_0) = \lim_n (F(t_n) - F(t_0)) / (t_n - t_0) = \lim_n \int h_n$。要把它换成 $\int \lim h_{n}$ 就够了，而 DCT 正好提供这个能力：

$\cdot$ $h_n \to \partial f / \partial t(x, t_0)$ 逐点（这是导数的定义）；
$\cdot$ **控制**：由中值定理，$|h_n(x)| \le \sup_{t \in [t_0, t_n]} | \partial f / \partial t(x, t) | \le g(x)$。

于是

$$F'(t_0) = \lim_n \int h_n = \int \lim_n h_n = \int \partial f / \partial t(x, t_0) d\mu(x)$$

∎

$>$ ⚠ (b) 里那个「取 sup 的控制」必须提前假定：如果只对**每个** $t$ 假设有控制，是不够的 —— 需要**同一个 $g$** 控制整族偏导数。

#### 逐项积分 + 积分为零 ⟺ 几乎处处为零 ⟹ L¹ 的逐项积分　`imp.termwise-L1`
*非负逐项积分 + 零集判定 $\implies L^{1}$ 的逐项积分*

设 $\sum_j \int |f_j| < \infty$。

**① 绝对收敛 a.e.。** 令 $g = \sum_j |f_j| \in L^+$。由非负函数的逐项积分，

$$\int g = \sum_j \int |f_j| < \infty$$

由「积分有限的后果」，$g < \infty \text{a.e.}$，即 $\sum_j |f_j(x)| < \infty$ 对 a.e. x 成立。所以 $\sum_j f_j(x)$ 对 a.e. x **绝对收敛**。

**② 定义 $f$。** 令 $f(x) = \sum_j f_j(x)$（在收敛的 a.e. 点上），其余点随意取 0。则 $|f| \le g$，故 $f \in L^{1}$。

**③ 部分和被控制。** 部分和 $s_N = \sum_{j\le N} f_j$ 满足 $|s_N| \le g \in L^1$。

**④ 用 DCT。** $s_N \to f$ a.e.，且被 $g$ 控制，故

$$\int f = \lim_{N\to\infty} \int s_N = \lim_{N\to\infty} \sum_{j\le N} \int f_j = \sum_{j=1}^{\infty} \int f_j$$

（中间一步用 $L^{1}$ 的线性。）∎

#### 积分为零 ⟺ 几乎处处为零 ⟹ 何时两个函数积分处处相同　`imp.integrals-equal-iff`
*积分为零 $\implies$ 用积分识别函数*

记 $h = f - g \in L^1$。三条之间的等价链条是

$$(i) \int_E f = \int_E g\quad  \forall E \in \mathcal{M}\quad  \iff\quad  \int_E h = 0\quad  \forall E$$

**$(i) \implies (ii)$**：分别取 $E = \{h \ge 0\}$ 与 $E = \{h < 0\}$。由 $\int_E h = 0$ 且 $h$ 在 $E$ 上不变号，得 $\{h > 0\}$ 与 $\{h < 0\}$ 都是零集（否则积分为正/负），故 $\mu(\{h \ne 0\}) = 0$，于是 $\int|h| = 0$。

**$(ii) \implies (iii)$**：$\int|h| = 0$ 配合「积分为零 $\iff$ 几乎处处为零」，直接得到 $h = 0 \text{a.e.}$。

**$(iii) \implies (i)$**：$h = 0 \text{a.e.}$ 时，对任意 $E$，$\int_E h$ 的简单函数逼近里可以整体避开零集，故积分为 0。∎

#### Fatou 引理 ⟹ Fatou 的推论　`imp.fatou-corollary`
*Fatou 引理 $\implies \text{a.e.}$ 版本的 Fatou*

把 Fatou 引理用在 $\liminf f_n$ 上：a.e. 收敛时 $\liminf_n f_n = f$，于是 $\int f = \int \liminf f_n \le \liminf \int f_n$。∎

#### 定义引用：「简单函数」→ 简单函数的积分　`def-link.simple-integral-def`

简单函数的积分就是在简单函数的定义上算加权和。

#### 定义引用：「简单函数的积分」→ 非负函数的积分　`def-link.nonneg-simple`

非负函数的积分定义成简单函数积分族的上确界。

#### 定义引用：「非负函数的积分」→ 单调收敛定理　`def-link.mct-nonneg`

MCT 是绕着这个定义做的。

#### 定义引用：「L⁺」→ 单调收敛定理　`def-link.lplus-mct`

MCT 对整列都要求在 $L^{+}$ 里。

#### 定义引用：「L⁺」→ 复函数的积分　`def-link.lplus-complex`

复函数的积分就是把正负部丢回 $L^{+}$ 去算。

#### 定义引用：「L⁺」→ 可积 / L¹　`def-link.lplus-integrable`

可积 $\iff \int |f| < \infty$，而 $|f| \in L^{+}$。

#### 定义引用：「可积 / L¹」→ 控制收敛定理　`def-link.integrable-dct`

DCT 的前提与结论都在 $L^{1}$ 里。

#### 定义引用：「L⁺」→ 控制收敛定理　`def-link.lplus-dct`

DCT 的证明是正负部各用一次 Fatou —— 又回到 $L^{+}$。

#### 定义引用：「零集与完备」→ 积分为零 ⟺ 几乎处处为零　`def-link.nullset-zeromeasure`

「积分为零 $\iff$ 几乎处处为零」里的 a.e. 就是相对于零集说的。

#### 定义引用：「测度」→ 逐项积分　`def-link.premeasure-termwise`

逐项积分最终落在测度的可数可加性上。

#### 定义引用：「可积 / L¹」→ L¹ 是向量空间　`def-link.integrable-L1-vectorspace`

这条命题说 $L^{1}$ 在代数上是个向量空间。

#### 定义引用：「可积 / L¹」→ L¹ 里的逼近　`def-link.integrable-approx`

逼近定理是在 $L^{1}$ 里说的（用的是 $\int |f - \varphi |$ 这个量）。

#### 定义引用：「简单函数」→ L¹ 里的逼近　`def-link.simple-approx-L1`

逼近用的正是简单函数。

#### 定义引用：「零集与完备」→ MCT（a.e. 版本）　`def-link.nullset-ae-mct`

「a.e. 版本」的意思就是把零集上的例外丢掉。

#### 依测度 Cauchy ⟹ 依测度 Cauchy ⟹ 收敛　`imp.cauchy-in-measure`
*依测度 Cauchy $\implies$ 依测度收敛且有一子列 a.e. 收敛*

**① 先抽子列，使「坏集合」的总测度有限。** 由 Cauchy 性，对每个 $k$ 存在 $N_k$ 使

$$\mu(E_k) \le 2^{-k}, \quad \text{ 其中} E_k = \{x : |f_n(x) - f_{N_k}(x)| \ge 2^{-k}\}\quad  (n \ge N_k)$$

不妨取 $N_1 < N_2 < \cdots$。记 $g_j = f_{N_j}$。

**② 让坏集合的尾并收敛。** 令

$$F_k = \bigcup_{j \ge k} E_j, \quad \text{ 则} \mu(F_k) \le \sum_{j\ge k} 2^{-j} = 2^{1-k} \to 0$$

**③ 在 $F_k^c$ 上一致 Cauchy。** 若 $x \notin F_k$，则对一切 $i \ge j \ge k$ 有 $x \notin E_j$，于是

$$|g_i(x) - g_j(x)| \le 2^{1-j}$$

所以 $\{g_j\}$ 在 $F_k^c$ 上**一致收敛**（Cauchy 且界趋于 0）。

**④ 造极限 $f$。** 令 $F = \bigcap_k F_k^c$，则

$$\mu(F) = \mu(X \setminus \bigcup_k F_k) \ge \mu(X) - \mu(F_k)\quad  \forall k\quad  \implies\quad  \mu(F^c) = 0$$

在 $F$ 上令 $f(x) = \lim_j g_j(x)$，在 $F^c$ 上任取 0。$f$ 是可测函数（可测函数的极限）。于是 $g_j \to f$ **a.e.**

**⑤ 换成依测度。** 取定 $k$，对 $j \ge k$、$x \in F_k^c$ 有 $|g_j(x) - f(x)| \le 2^{1-j}$。于是对任意 $\delta > 0$，

$$\mu(\{|g_j - f| > \delta\}) \le \mu(F_k) \le 2^{1-k}\quad  (j\text{ 充分大})$$

令 $k \to \infty$ 得 $g_j \to f$ 依测度。

**⑥ 把 $f_{n}$ 也拉进来。** 对任意 $\varepsilon > 0$，

$$\{|f_n - f| \ge \varepsilon\} \subseteq \{|f_n - g_j| \ge \varepsilon/2\} \cup \{|g_j - f| \ge \varepsilon/2\}$$

右边第一项由 Cauchy 性（取 $g_j = f_{N_j}$ 足够靠后）任意小，第二项由 ⑤ 任意小。故 $f_n \to f$ 依测度。∎

> ② 里 $\sum 2^{-k} < \infty$ 是关键 —— 正是这一条让「坏集合的尾并」趋于零，也就是 Borel–Cantelli 的精神。

#### 可积 / L¹ ⟹ L¹ 收敛 ⟹ 依测度收敛　`imp.L1-measure`
*Markov 不等式 $\implies L^{1}$ 收敛蕴含依测度收敛*

**Markov 不等式**：设 $g$ 可测非负，则对任意 $\varepsilon > 0$，

$$\mu(\{g \ge \varepsilon\}) \le (1/\varepsilon)\cdot\int g d\mu$$

证明：在 $\{g \ge \varepsilon\}$ 上有 $\varepsilon \le g$，即 $\varepsilon \chi_{\{g \ge \varepsilon\}} \le g$；两边积分得 $\varepsilon\cdot\mu(\{g \ge \varepsilon\}) \le \int g$。

取 $g = |f_n - f|$。给定 $\delta > 0$，

$$\mu(\{|f_n - f| > \delta\}) \le (1/\delta)\cdot\int |f_n - f| d\mu \to 0$$

（最后一步正是 $L^{1}$ 收敛的定义。）再对任意 $\varepsilon > 0$ 取 $n$ 足够大即可。∎

#### 五种收敛 ⟹ Egorov 定理　`imp.egorov`
*a.e. 收敛 + 有限测度 $\implies$ 近一致*

设 $f_n \to f$ a.e.，$\mu(X) < \infty$。

**① 收敛点集与坏集合。** 令 $F = \{x : f_n(x) \to f(x)\}$，则 $\mu(F^c) = 0$。对每个固定的 $k \in \mathbb{N}$ 令

$$E_n(k) = \bigcup_{m \ge n} \{x : |f_m(x) - f(x)| \ge k^{-1}\}$$

（「从第 $n$ 项起还有偏差 $\ge 1/k$ 的点」）。

**② 对固定 $k$，$E_n(k)$ 随 $n$ 递减，且 $\bigcap_n E_n(k) = F^c$。**（若 $x$ 最终偏差都 $< 1/k$，就不在任何足够靠后的 $E_n(k)$ 里。）

**③ 用有限测度取极限。** 由 $\mu(X) < \infty$ 与测度的上连续性（递减列），

$$\mu(E_n(k)) \to \mu(F^c) = 0\quad  (n \to \infty)$$

**④ 挑出「足够快趋于 0」的那些 $n$。** 给定 $\varepsilon > 0$，对每个 $k$ 选 $n_k$ 使

$$\mu(E_{n_k}(k)) < \varepsilon \cdot 2^{-k}$$

**⑤ 并起来。** 令 $E = \bigcup_k E_{n_k}(k)$。则

$$\mu(E) \le \sum_k \mu(E_{n_k}(k)) < \varepsilon \cdot \sum_k 2^{-k} = \varepsilon$$

**⑥ 在 $E^c$ 上一致收敛。** 取 $x \notin E$。对任意 $k$，$x \notin E_{n_k}(k)$，即对一切 $n \ge n_k$ 有

$$|f_n(x) - f(x)| < k^{-1}$$

这正是「$f_n \rightrightarrows  f$ 在 $E^c$ 上」的定义（给定精度 $k^{-1}$ $\le \varepsilon$ 后，取 $N = n_k$）。∎

$>$ ⚠ ③ 是唯一用到 $\mu(X) < \infty$ 的地方（递减列的上连续性需要首项有限）。少了它这一步就不成立，反例见节点正文。

#### L¹ 里的逼近 + Egorov 定理 ⟹ Lusin 定理　`imp.lusin`
*简单函数逼近 + Egorov $\implies$ Lusin*

**① 先用简单函数逼近。** 由「$L^{1}$ 里的逼近」，取简单函数列 $\{\varphi_n\}$ 使 $\int|f - \varphi_n| \to 0$；取子列还可保证 $\varphi_n \to f$ a.e.（由 $L^{1}$ 收敛 $\implies$ 依测度收敛 + 抽 a.e. 子列）。而简单函数是有限个可测集的特征函数之和。

**② 先对「指示函数」办到。** 对可测集 $A \subseteq [a, b]$ 与任意 $\varepsilon > 0$，由测度的正则性可找到紧集 $E \subseteq A$ 使 $\mu(A \setminus E) < \varepsilon$，于是 $\chi_A|_{E}$ 连续（在 $E$ 上恒为 1）。有限多个这样的紧集取交，就能让一整个简单函数在某个紧集上连续。

**③ 用 Egorov 把「几乎处处」升级成「一致」。** 把 ①② 得到的「在紧集上连续」逐步加细：取一列越来越好的紧集，用 Egorov 保证 $\varphi_n \to f$ 在某块丢掉任意小测度的集合后**一致**收敛。一致收敛保持连续性，故 $f$ 限制在剩下的那个紧集上连续。

**④ 收尾。** 每一步丢掉的测度都可以预先取得任意小，全部并起来仍小于 $\varepsilon$（把 $\varepsilon$ 预先换成 $\varepsilon /3$、$\varepsilon /9$、… 再求和）。于是得到一个紧集 $E \subseteq [a, b]$，$\mu(E^c) < \varepsilon$ 且 $f|_E$ 连续。∎

$>$ ⭐ 核心思想与 Egorov 一样是「**丢掉一小块，换取好性质**」：这次换到的是连续性。

> 路线是「Egorov + 简单函数逼近」。

#### 定义引用：「五种收敛」→ 四个标准反例　`def-link.modes-counterexamples`

四个反例各自击破一种收敛的逆命题。

#### 定义引用：「五种收敛」→ Egorov 定理　`def-link.modes-egorov`

Egorov 定理说的是其中两种收敛（a.e. 与近一致）的关系。

#### 定义引用：「依测度 Cauchy」→ 依测度 Cauchy ⟹ 收敛　`def-link.cauchy-thm`

定理把「依测度 Cauchy」升级成「依测度收敛 + a.e. 子列」。

#### 定义引用：「可积 / L¹」→ L¹ 收敛 ⟹ 依测度收敛　`def-link.integrable-measure`

$L^{1}$ 收敛的定义里用到 $\int |f_{n} - f|$。

#### 定义引用：「五种收敛」→ L¹ 收敛 ⟹ 依测度收敛　`def-link.modes-L1`

两种收敛的定义直接对照。

#### 定义引用：「测度」→ Egorov 定理　`def-link.measure-egorov`

证明的 ③ 靠测度的上连续性，而那是可数可加性的推论。

#### 预测度 + Carathéodory 定理 ⟹ 乘积测度　`imp.product-measure`
*矩形上的预测度 $\implies$ Carathéodory 扩张得到乘积测度*

**① $\mu_{0}$ 是良定义的。** 设 $E$ 有两种矩形不交并的写法。把两边的矩形再交叉细分成最小的那些块（$A_j \cap A_k'$ $\times$ $B_j \cap B_k'$），$\mu_{0}$ 的值不变 —— 因为 $\mu$、$\nu$ 在各自那一侧都是有限可加的。

**② $\mu_{0}$ 是 $\mathcal{A}$ 上的预测度。** $\mathcal{A} =$ 矩形的有限不交并，是代数（矩形的不交并再取差仍是有限个矩形块）。可数可加性由 $\mu$、$\nu$ 各自的可数可加性得到：把可数个不交的矩形块按两个方向分别整理成不交并。

**③ 用 Carathéodory 扩张。** 由「预测度 $\to$ 外测度 $\to$ 可测集 $\to$ 扩张测度」那一整套：$\mu_{0}$ 诱导出 $X \times Y$ 上的外测度 $\mu^{*}$，全体 $\mu^{*}$-可测集构成 $\sigma$代数，$\mu^{*}$ 在其上成为测度；而代数 $\mathcal{A}$ 中每个集合都是 $\mu^{*}$-可测的，且 $\mu^{*}|_\mathcal{A} = \mu_{0}$。

**④ 落到 $\mathcal{M} \otimes \mathcal{N}$ 上。** $\mathcal{A}$ 含所有矩形，故 $\mathcal{A}$ 生成 $\mathcal{M} \otimes \mathcal{N} \subseteq (\mu^{*}$-可测集)；把 $\mu^{*}$ 限制在 $\mathcal{M} \otimes \mathcal{N}$ 上，就是所要的测度 $\mu \times \nu$，它在矩形上取值 $\mu \times \nu(A \times B) = \mu(A) \nu(B)$。∎

$>$ ⭐ 这一段没有任何新东西 —— 全是把「测度的构造」那个星团的机器搬过来用一次。这也正是那个星团存在的理由：**它是所有具体测度的生产线**。

#### 截口 ⟹ 截口可测　`imp.section-measurable`
*截口的定义 $\implies$ 截口保持可测性*

**(a)** 令 $\mathcal{R} = \{E \subseteq X \times Y : E_x \in \mathcal{N}\text{ 且} E^y \in \mathcal{M}\quad  \forall(x, y) \in X \times Y\}$。

- **$\mathcal{R}$ 含所有矩形**：若 $E = A \times B$，则

$$E_x = B\quad  (x \in A), \quad  E_x = \emptyset\quad  (x \notin A)$$

两边都在 $\mathcal{N}$ 里（$\mathcal{N}$ 含 $\emptyset$）；横截口同理。

- **$\mathcal{R}$ 是 $\sigma$代数**：截口运算保持并、交、补 —— 例如 $(\bigcup_n E^{(n)})_x = \bigcup_n E^{(n)}_x$、$(E^c)_x = (E_x)^c$（这里用的是 $Y$ 在 $X \times Y$ 中的「竖条」补集）。故 $\mathcal{R}$ 对可数并与补封闭。

于是 $\mathcal{R} \supseteq \mathcal{M}($矩形族$) = \mathcal{M} \otimes \mathcal{N}$，(a) 得证。

**(b)** 设 $f$ 是 $\mathcal{M}\otimes\mathcal{N}$可测，$B \subseteq \mathbb{C}$ 可测。则

$$f_x^{-1}(B) = \{y : f(x, y) \in B\} = (f^{-1}(B))_x$$

而 $f^{-1}(B) \in \mathcal{M} \otimes  \mathcal{N}$，由 (a) 它的纵截口属于 $\mathcal{N}$，即 $f_x^{-1}(B) \in \mathcal{N}$。所以 $f_x$ 可测。横截口同理。∎

#### 单调类定理 + 截口可测 ⟹ 乘积测度由截口给出　`imp.product-sections`
*单调类定理 $\implies$ 乘积测度由截口积分给出*

**① 先设 $\mu$、$\nu$ 有限。** 令 $\mathcal{C} = \{E \in \mathcal{M} \otimes  \mathcal{N} : x \mapsto \nu(E_x)\text{ 可测}, y \mapsto \mu(E^y)\text{ 可测},\text{ 且} \mu\times\nu(E) = \int\nu(E_x)d\mu = \int\mu(E^y)d\nu\}$。

**② 矩形在 $\mathcal{C}$ 里。** 若 $E = A \times B$，则 $\nu(E_x) = \chi_A(x)\cdot\nu(B)$，它是可测的（指示函数 $\times$ 常数），且

$$\int \nu(E_x) d\mu(x) = \nu(B)\cdot\mu(A) = \mu \times \nu(A \times B)$$

**③ $\mathcal{C}$ 对递增并封闭。** 若 $E_1 \subseteq E_2 \subseteq \cdots$ 都在 $\mathcal{C}$ 中、$E = \bigcup E_n$：则 $\nu((E_n)_x) \nearrow  \nu(E_x)$（测度的下连续性），由 MCT 得 $x \mapsto \nu(E_x)$ 可测且 $\int\nu(E_x)d\mu = \lim \int\nu((E_n)_x)d\mu = \lim \mu\times\nu(E_n) = \mu\times\nu(E)$。

**④ $\mathcal{C}$ 对递减交封闭。** 若 $E_1 \supseteq E_2 \supseteq \cdots$、$E = \bigcap E_n$：因为测度有限，可以用 DCT（控制函数是常数 $\nu(Y) < \infty$）得到同样的等式。

**⑤ 用单调类定理。** 由 ①②③④，$\mathcal{C}$ 是含所有矩形的一个**单调类**。矩形族生成的**代数**再由矩形构成，所以 $\mathcal{C}$ 含这个代数；由单调类定理，$\mathfrak{m}(\text{代数}) = \mathcal{M}(\text{代数}) = \mathcal{M} \otimes  \mathcal{N}$，于是 $\mathcal{C} = \mathcal{M} \otimes \mathcal{N}$。

**⑥ 推广到 $\sigma$有限。** 取 $X = \bigcup_i X_i$、$Y = \bigcup_i Y_i$（各自测度有限），则 $X \times Y = \bigcup_i (X_i \times Y_i)$。对每个 $i$，把 ⑤ 用在 $E \cap (X_i \times Y_i)$ 上（这一步只用到**有限**测度）；再把 $i$ 加起来，用 MCT 对 $i$ 求极限即可。∎

$>$ ⚠ $\sigma$有限正是在 ⑥ 用掉的：没有它，就没法把无穷测度的空间切成可数块有限块。

#### 乘积测度由截口给出 + 单调收敛定理 ⟹ Fubini–Tonelli　`imp.tonelli`
*集合版（截口公式）+ MCT $\implies$ Tonelli*

**① 指示函数。** 取 $f = \chi_E$（$E \in \mathcal{M} \otimes  \mathcal{N}$）。此时

$$\int_Y f(x, y) d\nu(y) = \nu(E_x), \quad  \int_X f(x, y) d\mu(x) = \mu(E^y)$$

于是三重等式正是上一条定理的内容。

**② 简单函数。** 由线性推广到 $f = \sum_j a_j \chi_{E_j}$（$a_j \ge 0$，$E_{j}$ 不交）。

**③ 非负可测函数。** 取简单函数列 $\{f_n\} \nearrow  f$（简单函数逼近定理）。令

$$g_n(x) = \int f_n(x, y) d\nu(y), \quad  g(x) = \int f(x, y) d\nu(y)$$

由 $f_n \uparrow  f$ 与积分的单调性，$\{g_n\}$ 递增；由 **MCT**，$g = \lim_n g_n$ 且

$$\int g d\mu = \lim_n \int g_n d\mu$$

再由 ② 对每个 $n$ 的三重等式，

$$\int g_n d\mu = \int f_n d(\mu \times \nu)$$

于是

$$\int_X ( \int_Y f d\nu ) d\mu = \lim_n \int f_n d(\mu \times \nu) = \int f d(\mu \times \nu)$$

（最后一步又用一次 MCT。）另一边对称。**这就是 Tonelli，全程不需要可积性。**

**④ Fubini。** 设 $f \in L^1(\mu \times \nu)$。把 $f$ 拆成 $\operatorname{Re} f^+, \operatorname{Re} f^-, \operatorname{Im} f^+, \operatorname{Im} f^-$ 四个非负部分，对每一部分用 ③。由

$$\int |f| d(\mu \times \nu) < \infty$$

和 ③ 的三重等式，得到 $\int_X (\int_Y |f| d\nu) d\mu < \infty$，故 $\int_Y |f(x, \cdot)| d\nu < \infty$ 对 **a.e.** $x$ 成立 —— 即 $f_x \in L^1(\nu)$ a.e.；同理 $f^y \in L^1(\mu)$ a.e.。既然两个累次积分都已经是有限数，就可以直接相减、不再有 $\infty - \infty$ 的危险，三重等式对 $f$ 成立。∎

$>$ ⭐ 分工很干净：**Tonelli 负责非负（无条件），Fubini 用「可积」把四个非负部分的结论拼起来**。

#### Fubini–Tonelli + 完备化定理 + 乘积测度通常不完备 ⟹ 完备情形的 F–T　`imp.fubini-complete`
*乘积测度通常不完备 $\implies$ 必须补一条完备情形的 F–T*

**① 先证 $f \ge 0$ 的情形。** 由于 $\lambda$ 是 $\mu \times \nu$ 的完备化，$\mathcal{L}$ 中的集合可以写成

$$E = F \cup G, \quad  F \in \mathcal{M} \otimes  \mathcal{N}, \quad  G \subseteq H, \quad  \mu \times \nu(H) = 0$$

（取不交化后即 $E = F \sqcup  G$，于是 $\chi_E = \chi_F + \chi_G$。）

**② $\chi_F$ 那一半没问题** —— 直接归 Fubini–Tonelli（$F \in \mathcal{M}\otimes\mathcal{N}$）。

**③ $\chi_G$ 那一半也没问题** —— 因为 $G \subseteq H$ 而 $\mu \times \nu (H) = 0$，所以对**每一个** $x$ 都有 $\nu(G_x) \le \nu(H_x) = 0$（$H$ 的截口是 $\nu$零集，这一步用截口公式对 $H$ 本身成立），于是

$$\int \chi_G d\lambda = 0 = \int ( \int \chi_G d\nu ) d\mu$$

两边都是 0。（对 a.e. 的 $x$，$G_x$ 是 $\nu$零集。）

**④ 由线性推广到非负简单函数，再用 MCT 推广到一切 $f \ge 0$。** 关键点：完备化只多出「含在零集里的部分」，而这部分对积分的贡献恒为 0，所以整段论证不会被破坏。

**⑤ 一般情形**：把 $f$ 拆成 $\operatorname{Re} f^\pm , \operatorname{Im} f^\pm $ 四个非负部分，逐块用 ④ —— 但此时所有断言都退化成「对 a.e. 的 x / y」，因为零集上的截口行为不再逐一可控。∎

$>$ 要点：**核心就是把 $E$ 拆成 $F \sqcup G$** —— $F$ 归老定理、$G$ 归「截口都是零集」。

#### 乘积测度 ⟹ 乘积测度通常不完备　`imp.product-incomplete`
*乘积测度通常不完备*

取 $X = Y = [0, 1]$，$\mu = \nu = Lebesgue$ 测度（都是完备的）。令

$$D = \{(x, x) : x \in [0, 1]\}$$

则 $D$ 是闭集，故属于 $\mathfrak{B}_{[0,1]} \otimes  \mathfrak{B}_{[0,1]}$；且 $\mu \times \nu(D)$ 可以用截口公式算：对每个 $x$，$\nu(D_x) = \nu(\{x\}) = 0$，故

$$\mu \times \nu(D) = \int \nu(D_x) d\mu(x) = 0$$

**关键**：取一个 Lebesgue 测度为 0 但**不可测**（不属 $\mathfrak{B}_\{[0,1]\}$）的子集 $N \subseteq [0,1]$，令

$$G = \{(x, x) : x \in N\} \subseteq D$$

则 $G \subseteq D$ 而 $\mu \times \nu (D) = 0$，但 $G$ **不属于** $\mathfrak{B} \otimes  \mathfrak{B}$（它的截口给出的正是 $N$ —— 若 $G \in \mathfrak{B} \otimes  \mathfrak{B}$，由截口可测性，对每个 $x$ 都有 $G_x \in \mathfrak{B}$，而 $G_x$ 是 {x} 或 $\emptyset$ …… 需要用「$G$ 的截面沿对角线还原出 $N$」这一论证）。故 $\mu \times \nu$ 不完备。∎

$>$ ⭐ 一句话总结：**完备性可以被「零集的子集」打破，而乘积里零集特别多**。所以实用时必须先完备化 —— 这就是上一条定理存在的理由。

> ⚠ 「$G \notin \mathfrak{B} \otimes \mathfrak{B}$」那一步的细节（如何从截面还原出 $N$）这里只给了骨架；要写严格版，建议改用「对角线论证 + Fubini 定理给矛盾」的路线。

#### 定义引用：「预测度」→ 乘积测度　`def-link.productmeasure-premeasure`

矩形上的 $\mu_{0}$ 就是一个预测度。

#### 定义引用：「积 σ-代数」→ 乘积测度　`def-link.productmeasure-sigma`

乘积测度定义在积 $\sigma$代数 $\mathcal{M} \otimes \mathcal{N}$ 上。

#### 定义引用：「截口」→ 截口可测　`def-link.section-props`

直接验证截口的运算性质。

#### 定义引用：「单调类」→ 乘积测度由截口给出　`def-link.monotoneclass-lemma`

截口公式的证明走的正是单调类定理：先验证矩形成立，再说明「满足它的集合」构成一个单调类。

#### 定义引用：「生成的 σ-代数」→ 单调类定理　`def-link.generated-monotone-lemma`

定理的陈述里用到 $\mathfrak{m}(\mathcal{E})$ 与 $\mathcal{M}(\mathcal{E})$ 两个生成记号。

#### 定义引用：「乘积测度」→ 乘积测度由截口给出　`def-link.productmeasure-sections-thm`

定理算的就是乘积测度。

#### 定义引用：「截口」→ Fubini–Tonelli　`def-link.section-fubini`

Fubini 的整个陈述都是用截口写的。

#### 定义引用：「乘积测度」→ Fubini–Tonelli　`def-link.productmeasure-fubini`

重积分就是对 $\mu \times \nu$ 积分。

#### 定义引用：「可积 / L¹」→ Fubini–Tonelli　`def-link.integrable-fubini`

Fubini 的 (b) 用的是 $L^{1}(\mu \times \nu )$。

#### 定义引用：「乘积测度」→ 完备情形的 F–T　`def-link.productmeasure-complete`

完备情形下先要把 $\mu \times \nu$ 完备化。

#### 定义引用：「零集与完备」→ 完备情形的 F–T　`def-link.completion-fubini`

证明的核心是把集合拆成「属于 $\mathcal{M}\otimes\mathcal{N}$ 的部分」+「含在零集里的部分」。

#### 定义引用：「有序对」→ 截口　`def-link.pair-section`

集合构造式 $E_x = \{ y : (x, y) \in E \}$ 里写的就是**有序对** $(x, y)$。

#### 定义引用：「函数」→ 截口　`def-link.function-section`

截口的第二半是对**函数** $f : X \times Y \to \mathbb{C}$ 定义 $f_x(y) := f(x, y)$。

#### 笛卡尔积存在 ⟹ 截口　`imp.product-section`
*笛卡尔积存在 $\implies$ 可以谈截口*

截口是 $X \times Y$ 的子集 $E$ 的属性，所以先要有 $X \times Y$ 这个集合本身 —— 这正是笛卡尔积存在定理给的。

#### 定义引用：「可测函数」→ 截口可测　`def-link.measurable-function-section-measurable`

**(b)** 说的正是「可测**函数**的截口仍可测」。

#### 定义引用：「积 σ-代数」→ 截口可测　`def-link.product-sigma-section-measurable`

前提 $E \in \mathcal{M} \otimes \mathcal{N}$ 里的 $\otimes$ 就是**积 $\sigma$-代数**。

#### 符号测度 + 正集的封闭性 ⟹ Hahn 分解定理　`imp.hahn`
*符号测度 + 正集的封闭性 $\implies$ Hahn 分解*

**① 先把 $\nu$ 的无穷值甩掉。** 不妨设 $\nu$ 不取 $\infty$（若 $\nu$ 不取 $-\infty$ 就改证 $-\nu$）。于是 $\nu(X) < \infty$ 中的「上方」是安全的。

**② 挑一个「最大的正集」。** 令

$$m := \sup\{ \nu(E) : E\text{ 是正集} \}, $$

则 $m < \infty$（因为 $\nu$ 不取 $\infty$ 而 $\nu (E) \le \nu (X)$ 型估计受控）。取一列正集 $\{P_j\}$ 使 $\nu(P_j) \to m$，令

$$P = \bigcup_j P_j$$

由正集的可数并仍是正集，$P$ 是正集；且 $\nu(P) = m$（正集的不交化 + 可数可加）。

**③ 断言 $N = X \setminus P$ 是负集。** 反设 $N$ 不含负集，即 $N$ 不是负的。要证它会挤出一个比 $m$ 更大的正集。

**④ 在 $N$ 里挖出正集。** 若 $N$ 不是负集，则存在可测 $A \subseteq N$ 使 $\nu(A) > 0$。「$A$ 是正的」就到此结束；否则存在 $A_1 \subseteq A$ 使 $\nu(A_1) < 0$。取**最小的自然数** $n$ 使

$$\nu(A_1) < -1/n$$

（$n_1$ 取「使存在负测度集 $\le -1/n_{1}$ 的最小 $n$」。**取最小**这一步是关键 —— 它保证后面能取极限。）

再在 $A \setminus A_1$ 里重复同样的操作，得到 $A_2, \ldots $

**⑤ 若操作终止**，剩下的 $B = A \setminus \bigcup_k A_k$ 就是正集（因为已经没有负子集可以挖了）。
**⑥ 若操作不终止**，取 $B = A \setminus \bigcup_k A_k$。由可数可加性

$$\nu(A) = \nu(B) + \sum_k \nu(A_k)$$

而 $\sum_k |\nu(A_k)| < \infty$（因为左边有限），特别地 $\nu(A_k) \to 0$，这迫使 $n_k \to \infty$，从而对任意 $F \subseteq B$：若 $\nu(F) < -1/n_{k-1}$，就与 $n_k$ 的**最小性**矛盾。于是 $\nu(F) \ge -1/n_{k-1}$ 对一切 $k$ 成立，令 $k \to \infty$ 得 $\nu(F) \ge 0$。故 $B$ 也是正集。

**⑦ 矛盾。** 由 ⑤⑥，$A$ 中含正集 $B$。于

$$\nu(B) = \nu(A) - \sum_k \nu(A_k) > 0$$

说明 $P \cup B$ 是正集且 $\nu(P \cup B) = m + \nu(B) > m$，与 $m$ 的定义矛盾。故 $N$ 必为负集，$X = P \sqcup  N$ 就是 Hahn 分解，**存在性得证**。

**⑧ 唯一性。** 设 $P' \sqcup  N'$ 是另一对。则 $P \setminus P' \subseteq P$（正集）且 $\subseteq N'$（负集），所以它既是正集又是负集 —— 只能是零集；同理 $P' \setminus P$ 也是零集。故 $P \triangle  P' = N \triangle  N'$ 是 $\nu$零集。∎

> ⭐ 「取最小的 $n$」是整段证明的技术核心：因为 $n$ 取最小，后面才能让 $\nu(F) \ge -1/n_{k-1}$ 一路通过 $k \to \infty$ 得到 $\nu(F) \ge 0$。

#### Hahn 分解定理 ⟹ Jordan 分解定理　`imp.jordan`
*Hahn 分解 $\implies$ Jordan 分解*

取 $\nu$ 的一个 Hahn 分解 $X = P \sqcup  N$（$P$ 正、$N$ 负）。定义

$$\nu^+(E) := \nu(E \cap P), \quad  \nu^-(E) := -\nu(E \cap N)$$

**① 它们都是测度。** 对 $\nu ^{+}$：$\nu^+(\emptyset) = \nu(\emptyset) = 0$；对不交的 $\{E_j\}$，

$$\nu^+( \bigsqcup_j E_j ) = \nu( \bigsqcup_j (E_j \cap P) ) = \sum_j \nu(E_j \cap P) = \sum_j \nu^+(E_j)$$

（右边的每一项都 $\ge 0$，因为 $E_j \cap P$ 是正集的子集。）$\nu ^{-}$ 同理。

**② $\nu = \nu ^{+} - \nu ^{-}$。** 对任意 $E$，

$$\nu(E) = \nu(E \cap P) + \nu(E \cap N) = \nu^+(E) - \nu^-(E)$$

**③ $\nu ^{+} \perp \nu ^{-}$。** 取 $E = P$、$F = N$：$P$ 是 $\nu ^{-}$零集（$\nu ^{-}(P) = -\nu (P \cap N) = 0$），$N$ 是 $\nu ^{+}$零集。

**④ 至少一个有限。** 由符号测度的定义，$\nu$ 至多取到 $\pm \infty$ 中的一个：若 $\nu$ 不取 $\infty$ 则 $\nu ^{+}$ 有限，若 $\nu$ 不取 $-\infty$ 则 $\nu ^{-}$ 有限。

**⑤ 唯一性。** 设 $\nu = \mu_1 - \mu_2$ 也是这种分解（$\mu_1 \perp  \mu_2$）。取见证奇异性的划分 $X = E \sqcup  F$（$E$ 是 $\mu _{1}$零集、$F$ 是 $\mu _{2}$零集）。由 Hahn 分解的唯一性只能差一个零集，逐块比较即可得到 $\mu_1 = \nu^+$、$\mu_2 = \nu^-$。∎

#### 绝对连续 ⟹ 绝对连续的 ε–δ 刻画　`imp.ac-epsilon-delta`
*绝对连续 $\implies \varepsilon$–$\delta$ 刻画（$\nu$ 有限时）*

设 $\nu$ 有限且 $\nu \ll  \mu$。由「绝对连续与变差」那条命题，可以**不妨设 $\nu$ 本身就是正测度**（换成 $|\nu |$ 不影响结论）。

**$(\Longleftarrow )$** 若 $\mu (E) = 0$，则对任意 $\varepsilon > 0$ 有 $\mu (E) < \delta$，于是 $|\nu (E)| \le \varepsilon$；令 $\varepsilon \to 0$ 得 $\nu (E) = 0$。

**$(\implies )$ 反证。** 设存在 $\varepsilon > 0$，使对**一切** $n$ 都能找到 $E_n \in \mathcal{M}$ 满足

$$\mu(E_n) < 2^{-n}, \quad  \nu(E_n) \ge \varepsilon$$

令

$$F_k = \bigcup_{n \ge k} E_n, \quad  F = \bigcap_k F_k$$

则 $\mu(F_k) \le \sum_{n\ge k} 2^{-n} = 2^{1-k} \to 0$，由 $\mu$ 的下连续性与递减性得 $\mu(F) = 0$。

另一方面 $\nu(F_k) \ge \nu(E_k) \ge \varepsilon$ 对一切 $k$ 成立；由 $\nu$ 有限与测度的下连续性（$F_k \searrow  F$，首项有限）得

$$\nu(F) = \lim_k \nu(F_k) \ge \varepsilon > 0$$

这与 $\nu \ll  \mu$（$\mu (F) = 0$ 应推出 $\nu (F) = 0$）矛盾。故这样的 $\varepsilon$ 不存在，即对每个 $\varepsilon > 0$ 都有对应的 $\delta$。∎

$>$ ⭐ 反证里那个「对一切 $n$ 都能找到」是取出的关键：它把「不连续」翻译成了一列越来越小的坏集合，再用 Borel–Cantelli 型的尾并把它们压成零集。

#### 要么奇异、要么有下界 + 单调收敛定理 + 绝对连续与变差 ⟹ Lebesgue–Radon–Nikodym 定理　`imp.lebesgue-rn`
*「要么奇异、要么有下界」$\implies$ Lebesgue–Radon–Nikodym*

**I. 先设 $\nu$、$\mu$ 都有限，且 $\nu \ge 0$。**

**① 造候选函数集。** 令

$$\mathcal{F} := \{ f : X \to [0, +\infty] : \int_E f d\mu \le \nu(E)\quad  \forall E \in \mathcal{M} \}$$

则 $0 \in \mathcal{F}$，且 $\mathcal{F}$ 对**取大**封闭：若 $f, g \in \mathcal{F}$，令 $A = \{f > g\}$、$h = \max_{f, g}$，则对任意 $E$，

$$\int_E h d\mu = \int_{E\cap A} f d\mu + \int_{E\setminus A} g d\mu \le \nu(E\cap A) + \nu(E\setminus A) = \nu(E)$$

故 $h \in \mathcal{F}$。

**② 取上确界。** 令 $a := \sup\{ \int f d\mu : f \in \mathcal{F} \} \le \nu(X) < \infty$（这一步用到 $\nu$ 有限）。取 $\{f_n\} \subseteq \mathcal{F}$ 使 $\int f_n d\mu \to a$，令

$$g_n = \max_{f_1, \ldots , f_n}, \quad  f = \sup_n f_n$$

由 ① 每个 $g_n \in \mathcal{F}$，且 $g_n \uparrow  f$、$\int g_n d\mu \ge \int f_n d\mu$，故 $\lim_n \int g_n d\mu = a$。由 **MCT**，$f \in \mathcal{F}$ 且 $\int f d\mu = a$。

**③ 断言 $d\lambda := d\nu - f d\mu$ 与 $\mu$ 奇异。** 反设不然，由**引理**，存在 $\varepsilon > 0$ 与 $E \in \mathcal{M}$、$\mu (E) > 0$，使 $\lambda \ge \varepsilon\mu$ 在 $E$ 上成立，即

$$\varepsilon \chi_E d\mu \le d\nu - f d\mu\quad  \implies\quad  (f + \varepsilon \chi_E) d\mu \le d\nu$$

于是 $f + \varepsilon \chi_E \in \mathcal{F}$，但

$$\int (f + \varepsilon \chi_E) d\mu = a + \varepsilon\cdot\mu(E) > a$$

与 $a$ 的**上确界**性矛盾。故 $\lambda \perp \mu$，$\nu = \lambda + (f d\mu)$ 就是所要的分解。

**④ 唯一性。** 设 $d\nu = d\lambda' + f' d\mu$ 是另一种分解。则

$$d\lambda - d\lambda' = (f' - f) d\mu$$

左边与 $\mu$ 奇异（两个各与 $\mu$ 奇异的测度之差仍与 $\mu$ 奇异），右边关于 $\mu$ 绝对连续。由「既奇异又绝对连续 $\implies$ 等于零」，两边都是 0，即 $\lambda = \lambda'$ 且 $f = f'$ $\mu -\text{a.e.}$。

**II. 推广到 $\sigma$有限。** 取 $X = \bigcup_j A_j$（$\mu(A_j) < \infty$、$\nu(A_j) < \infty$）。令

$$\mu_j(E) := \mu(E \cap A_j), \quad  \nu_j(E) := \nu(E \cap A_j)$$

对每一对 $(\mu_j, \nu_j)$ 用 $I$，得 $d\nu_j = d\lambda_j + f_j d\mu_j$。规定 $\lambda_j(A_j^c) = 0$、$f_j = 0$ 在 $A_j^c$ 上，令

$$\lambda := \sum_j \lambda_j, \quad  f := \sum_j f_j$$

则 $d\nu = d\lambda + f d\mu$、$\lambda \perp  \mu$，且 $d\lambda$、$f d\mu$ 都 $\sigma$有限。

**$III. \nu$ 是符号测度。** 把 $I$、II 分别用在 $\nu^+$ 与 $\nu^-$ 上（由「绝对连续与变差」，绝对连续性对变差是逐块的），再把结果相加。∎

> ⭐ ③ 那一步是全证明的枢纽：假如 $\lambda$ 还「留了一点 $\mu$质量」，就能拿它把 $f$ 往上顶一点、得出比上确界 $a$ 更大的值 —— 于是 $\lambda$ 只能全部跑到 $\mu$ 看不到的地方去，即 $\lambda \perp \mu$。

#### 积分给出绝对连续测度 + 何时两个函数积分处处相同 ⟹ RN 导数的链式法则　`imp.rn-chain-rule`
*换元公式与链式法则*

设 $\nu \ll  \mu \ll  \lambda$。

**(a) 换元公式 $\int g d\nu = \int g \frac{d\nu}{d\mu} d\mu$。** 分四步爬：

$\cdot$ $g = \chi_E$：左边是 $\nu(E) = \int_E \frac{d\nu}{d\mu} d\mu$（这正是 RN 定理的内容），右边同；
$\cdot g$ 是简单函数：由线性；
$\cdot$ $g \in L^+$：取简单函数列 $g_n \uparrow  g$，两边各用一次 MCT；
$\cdot$ $g \in L^1(\nu)$：拆正负部。

**(b) 链式法则。** 对任意可测 $E$，用 (a) 两次：

$$\nu(E) = \int_E \frac{d\nu}{d\mu} d\mu = \int_E \frac{d\nu}{d\mu} \cdot \frac{d\mu}{d\lambda} d\lambda$$

另一方面又有 $\nu(E) = \int_E \frac{d\nu}{d\lambda} d\lambda$（因为 $\nu \ll \lambda$）。两式对**一切** $E$ 相等，由「用积分识别函数」，两个密度 $\lambda -\text{a.e.}$ 相等：

$$\frac{d\nu}{d\lambda} = \frac{d\nu}{d\mu} \cdot \frac{d\mu}{d\lambda}\quad  \lambda-\text{a.e.}$$

∎

#### 积分给出绝对连续测度 ⟹ 积分的绝对连续性　`imp.integral-ac-continuity`
*积分给出绝对连续测度 $\implies$ 积分的绝对连续性*

把「积分给出绝对连续测度」与绝对连续的 $\varepsilon$–$\delta$ 刻画拼起来即可：$\mu(E) < \delta \implies \nu(E) = \int_E f \, d\mu < \varepsilon$。∎

#### 定义引用：「符号测度」→ 正集 / 负集 / 零集　`def-link.signed-positive`

正负集是针对符号测度定义的。

#### 定义引用：「正集 / 负集 / 零集」→ Hahn 分解定理　`def-link.positive-hahn`

Hahn 分解的结论就是「空间切成一个正集 + 一个负集」。

#### 定义引用：「符号测度」→ Jordan 分解定理　`def-link.signed-jordan`

Jordan 分解把符号测度拆成两个测度之差。

#### 定义引用：「Hahn 分解定理」→ Jordan 分解定理　`def-link.hahn-jordan`

$\nu ^{+}$、$\nu ^{-}$ 的造法直接来自 Hahn 分解的那个划分。

#### 定义引用：「相互奇异」→ Jordan 分解定理　`def-link.singular-jordan`

Jordan 分解里那个 $\nu ^{+} \perp \nu ^{-}$ 用的就是相互奇异。

#### 定义引用：「测度」→ 绝对连续　`def-link.measure-ac`

绝对连续里被参照的 $\mu$ 是一个真测度。

#### 定义引用：「Jordan 分解定理」→ 绝对连续与变差　`def-link.variations-ac`

命题是用 $\nu ^{+}$、$\nu ^{-}$ 把绝对连续性拆成两半说的。

#### 定义引用：「绝对连续」→ 要么奇异、要么有下界　`def-link.ac-lemma`

引理出场的目的是为 RN 定理准备「$\varepsilon$ 下界」。

#### 定义引用：「相互奇异」→ 要么奇异、要么有下界　`def-link.singular-lemma`

引理的另一半结论就是相互奇异。

#### 定义引用：「绝对连续」→ Lebesgue–Radon–Nikodym 定理　`def-link.ac-rn`

$L$–$R$–$N$ 里那个 $\rho \ll \mu$ 就是绝对连续。

#### 定义引用：「相互奇异」→ Lebesgue–Radon–Nikodym 定理　`def-link.singular-rn`

同时用到「与 $\mu$ 奇异」那一半。

#### 定义引用：「可积 / L¹」→ 积分给出绝对连续测度　`def-link.integral-ac`

「$\nu$ 有限 $\iff f \in L^{1}(\mu )$」用到可积的定义。

#### 定义引用：「复测度」→ 复测度的 Radon–Nikodym　`def-link.complex-rn`

这条定理就是复测度版本的 $L$–$R$–$N$。

#### 定义引用：「可积 / L¹」→ 复测度的 Radon–Nikodym　`def-link.integrable-complex-rn`

复情形下密度必须是 $L^{1}$ 的。

#### 定义引用：「测度」→ 全变差的基本性质　`def-link.measure-totalvariation`

全变差本身是一个测度。

#### 覆盖引理 + 极大函数 ⟹ 极大定理　`imp.maximal-theorem`
*覆盖引理 $\implies$ 极大定理*

**① 把坏集换成球族。** 令 $E_\alpha = \{x : Hf(x) > \alpha\}$。对每个 $x \in E_\alpha$，由 Hf 的定义（上确界）存在 $r_x > 0$ 使

$$A_{r_x}|f|(x) > \alpha\quad  \iff\quad  \int_{B(r_x, x)} |f(y)| dy > \alpha\cdot m(B(r_x, x))$$

于是 $\{B(r_x, x)\}_{x \in E_\alpha}$ 是 $E_\alpha$ 的一个开球覆盖，且每个球都满足上面那个「超额」不等式。

**② 用覆盖引理挑不交子族。** 任取 $c < m(E_\alpha)$（先设 $m(E_\alpha ) < \infty$）。由**覆盖引理**，存在 $x_1, \ldots , x_k \in E_\alpha$ 使 $B_j = B(r_{x_j}, x_j)$ 两两不交，且

$$\sum_j m(B_j) > 3^{-n} c$$

**③ 把测度换成积分。** 由 ① 里每个球的超额不等式，

$$c < 3^n \sum_j m(B_j) < (3^n/\alpha)\cdot\sum_j \int_{B_j} |f| dy \le (3^n/\alpha)\cdot\int_{\mathbb{R}^n} |f| dy$$

（最后一步用的是：$B_j$ 两两不交，所以把积分加起来不超过整体积分。）

**④ 令 $c \to m(E_\alpha )$。** 得到

$$m(E_\alpha) \le (3^n/\alpha)\cdot\int |f| dy$$

即 $C = 3^n$。∎

> ⭐ 整段只有一个「魔法」：覆盖引理保证挑出来的不交球虽然装不满 $E_\alpha$，但总测度至少是 $3^{-n}$ 倍 —— 恰好够用。

#### 极大定理 + L¹ 里的逼近 + 平均算子联合连续 ⟹ Lebesgue 微分定理　`imp.lebesgue-differentiation`
*极大定理 + 连续函数逼近 $\implies$ Lebesgue 微分定理*

**① 先局部化。** 由 $L^{1}_{l}oc$ 的定义与测度的可数可加性，只需对每个 $N \in \mathbb{N}$ 证明在球 $\{|x| \le N\}$ 上几乎处处成立；把 $f$ 换成 $f\cdot\chi_{B(N+1, 0)}$ 后即可**设 $f \in L^1$**。

**② 用连续函数逼近。** 给定 $\varepsilon > 0$，由「$L^{1}$ 里的逼近」，取**连续函数** $g$ 使

$$\int |g(y) - f(y)| dy < \varepsilon$$

**③ 连续情形是白送的。** 若 $g$ 连续，则对**每一个** $x$ 都有 $A_r g(x) \to g(x)$（$r \to 0$）—— 因为 $g$ 在 $x$ 附近近似为常数。

**④ 把差值压住。** 对任意 $x$，

$$\sup_{r>0} |A_r f(x) - f(x)| = \sup_r |A_r(f - g)(x) + (A_r g - g)(x) + (g - f)(x)| \le H(f - g)(x) + |f - g|(x)$$

（第一项用 $|A_r(f-g)| \le A_r|f-g| \le H(f-g)$，第二项由 ③ 取 $r \to 0$）。

**⑤ 估计坏集。** 令

$$E_\alpha = \{x : \sup_{r>0} |A_r f(x) - f(x)| > \alpha\}$$

由 ④，$E_\alpha \subseteq F_{\alpha/2} \cup \{x : H(f-g)(x) > \alpha/2\}$，其中 $F_{\alpha/2} = \{|f - g| > \alpha/2\}$。于是

$$m(E_\alpha) \le 2\varepsilon / \alpha + 2C\varepsilon / \alpha$$

（第一项用 Markov 不等式，第二项用**极大定理**。）

**⑥ 令 $\varepsilon \to 0$。** 右边对**任意** $\varepsilon > 0$ 成立，故 $m(E_\alpha) = 0$ 对一切 $\alpha > 0$ 成立。于是

$$\lim_{r\to0} A_r f(x) = f(x)\quad \text{ 对一切} x \notin \bigcup_{m\in\mathbb{N}} E_{1/m}$$

而右边是可数个零集之并，仍是零集。∎

> ⭐ 这是分析里最漂亮的标准套路之一：**用「连续函数是稠密的」把问题搬到好情形，再用极大不等式把误差控制住**。两边一夹，坏集测度为零。

#### Lebesgue 微分定理 ⟹ Lebesgue 集几乎处处　`imp.lebesgue-set`
*微分定理 + 可数稠密子集 $\implies$ Lebesgue 集几乎处处*

**① 对每个复数 $c$ 用一次微分定理。** 固定 $c \in \mathbb{C}$，把微分定理用在函数 $h(x) = |f(x) - c|$ 上（它是 $L^{1}_{l}oc$ 的）：存在零集 $E_c$，使对 $x \notin E_c$，

$$\lim_{r\to0} \frac{1}{m(B(r,x))} \int_{B(r,x)} |f(y) - c| dy = |f(x) - c|$$

**② 只取可数多个 $c$。** 取 $\mathbb{C}$ 的一个**可数稠密子集** $D$（比如 $\mathbb{Q} + i\mathbb{Q}$），令

$$E = \bigcup_{c \in D} E_c$$

可数多个零集之并仍是零集，故 $m(E) = 0$。

**③ 在 $E$ 外验证**。设 $x \notin E$，任给 $\varepsilon > 0$，取 $c \in D$ 使 $|f(x) - c| < \varepsilon$。则

$$\frac{1}{m(B(r,x))} \int_{B(r,x)} |f(y) - f(x)| dy \le \frac{1}{m(B(r,x))} \int_{B(r,x)} |f(y) - c| dy + |f(x) - c|$$

右边第一项由 ①（$x \notin E_c$）在 $r \to 0$ 时趋于 $|f(x) - c|$，于是整个右端的极限 $\le$ $|f(x) - c| + \varepsilon < 2\varepsilon$。令 $\varepsilon \to 0$ 得极限为 0，即 $x \in L_f$。

故 $L_f^c \subseteq E$，从而 $m(L_f^c) = 0$。∎

> ⭐ 「把不可数条件化归成可数」这一步是可数性论证的典型手笔，和 Borel–Cantelli 是同一种精神。

#### Lebesgue 集几乎处处 + 可缩族 ⟹ 可缩族的微分定理　`imp.differentiation-general`
*Lebesgue 集 + 可缩条件 $\implies$ 一般族的微分定理*

设 $x \in L_f$，$\{E_r\}$ 可缩地趋于 $x$，即 $E_r \subseteq B(r,x)$ 且 $m(E_r) > \alpha\cdot m(B(r,x))$。

**① 关键估计（一行）。** 因为 $E_r \subseteq B(r,x)$，把积分域放大到球上只会变大；再用 $m(E_r) > \alpha m(B(r,x))$ 把分母换小：

$$\frac{1}{m(E_r)} \int_{E_r} |f(y) - f(x)| dy \le \frac{1}{m(E_r)} \int_{B(r,x)} |f(y) - f(x)| dy \le (1/\alpha)\cdot m(B(r,x)) \int_{B(r,x)} |f(y) - f(x)| dy$$

**② 收尾。** 由 $x \in L_f$ 的定义，最右边当 $r \to 0$ 时趋于 0。故第一个极限为 0。

**③ 第二个极限。** 由

$$| \frac{1}{m(E_r)} \int_{E_r} f - f(x) | \le \frac{1}{m(E_r)} \int_{E_r} |f(y) - f(x)| dy \to 0$$

即得 $\frac{1}{m(E_r)} \int_{E_r} f dy \to f(x)$。∎

> 全部难度都被「把 L_f 的定义写成 $\int|f(y) - f(x)|$」吸收掉了 —— 这也解释了为什么定义要那么写。

#### 可缩族的微分定理 + 正则 Borel 测度 + 覆盖引理 ⟹ RN 导数的点态公式　`imp.rn-pointwise`
*微分定理 + 正则性 $\implies RN$ 导数的点态公式*

设 $d\nu = d\lambda + f\cdot dm$（$\lambda \perp  m$），$\nu$ 正则。

**① 先算全变差。** 由全变差的性质，$d|\nu| = d|\lambda| + |f|\cdot dm$。既然 $\nu$ 正则，$|\nu |$ 正则，于是 $\lambda$ 与 $f\cdot dm$ 都正则；由「$g\cdot dm$ 正则 $\iff$ $g \in L^1_{loc}$」得 $f \in L^1_{loc}$。

**② 拆比值。**

$$\nu(E_r) / m(E_r) = \lambda(E_r) / m(E_r) + \frac{1}{m(E_r)} \int_{E_r} f\cdot dm$$

第二项由**可缩族的微分定理**趋于 $f(x)$（对 m-a.e. x）。所以只需证第一项趋于 0。

**③ 把 $\lambda$ 的坏点收集起来。** 不妨设 $\lambda \ge 0$，并取 $A$ 使 $\lambda(A) = m(A^c) = 0$（$\lambda \perp m$ 的见证）。令

$$F_k = \{ x \in A : \limsup_{r\to0} \lambda(B(r, x)) / m(B(r, x)) > 1 / k \}$$

**④ 用正则性把 $\lambda$ 压小。** 给定 $\varepsilon > 0$，由 $\lambda$ 的正则性（从外面用开集逼近）取开集 $U \supseteq A$ 使 $\lambda(U) < \varepsilon$（注意 $\lambda(A) = 0$，但 $U$ 比 $A$ 大，多出来的部分也可以做得任意小）。

**⑤ 每个坏点配一个小球。** 对 $x \in F_k$，由 $F_k$ 的定义与 $B_x \subseteq U$（在 $A$ 附近取足够小的球即可），存在球 $B_x$ 使

$$\lambda(B_x) > (1/k)\cdot m(B_x)$$

**⑥ 覆盖引理再来一次。** 令 $V_\varepsilon = \bigcup_{x \in F_k} B_x$（它是 $U$ 中的开集，故 $\lambda(V_\varepsilon) \le \lambda(U) < \varepsilon$）。取 $c < m(V_\varepsilon)$，由**覆盖引理**挑出不交的 $B_{x_1}, \ldots , B_{x_j}$ 使 $\sum m(B_{x_i}) > 3^{-n} c$。于是

$$c < 3^n \sum_i m(B_{x_i}) \le 3^n k \sum_i \lambda(B_{x_i}) \le 3^n k\cdot\lambda(V_\varepsilon) \le 3^n k \varepsilon$$

**⑦ 令 $\varepsilon \to 0$。** 得 $m(V_\varepsilon) = 0$，故某个零集包含了一切 $F_k$，即 $F_k$ 全是零集，从而 $\lim_{r\to0} \lambda(B(r,x))/m(B(r,x)) = 0$ 对 m-a.e. x 成立。

**⑧ 从球换到可缩族。** 上面用的是球；要换成一般的可缩族 $E_r$，用

$$\lambda(E_r) / m(E_r) \le \lambda(B(r,x)) / m(E_r) \le (1/\alpha)\cdot\lambda(B(r,x)) / m(B(r,x)) \to 0$$

（第二个不等号用了 $m(E_r) > \alpha m(B(r,x))$，并且 $E_r \subseteq B(r,x)$ 使分子变大。）把 ⑦ 的结果搬过来即可。∎

> ⭐ 这条把 Radon–Nikodym 导数彻底「算得出来」了：它就是在小球上质量比的极限 —— 正是「密度 $=$ 质量/体积」的严格版本。

#### 定义引用：「RN 导数与 Lebesgue 分解」→ L¹(ν) 与全变差　`def-link.totalvariation-l1`

$d\nu /d|\nu |$ 就是一个 RN 导数。

#### 定义引用：「可积 / L¹」→ L¹(ν) 与全变差　`def-link.integrable-l1signed`

$L^{1}(\nu )$ 的定义直接搬用 $L^{1}(|\nu |)$。

#### 定义引用：「局部可积」→ 平均算子 Aᵣ　`def-link.locally-integrable-average`

平均算子只在 $L^{1}_{l}oc$ 上定义。

#### 定义引用：「平均算子 Aᵣ」→ 极大函数　`def-link.average-maximal`

极大函数就是对 $A_{r}|f|$ 取上确界。

#### 定义引用：「局部可积」→ 极大函数　`def-link.locally-maximal`

极大函数的定义域是 $L^{1}_{l}oc$。

#### 定义引用：「极大函数」→ 极大定理　`def-link.maximal-theorem-lm`

极大定理估的就是 Hf 的分布函数。

#### 定义引用：「Lebesgue 集」→ Lebesgue 集几乎处处　`def-link.lebesgue-set-thm`

定理说这个集合的补是零集。

#### 定义引用：「可缩族」→ 可缩族的微分定理　`def-link.shrinks-general`

定理对一切可缩族成立。

#### 定义引用：「Lebesgue 集」→ 可缩族的微分定理　`def-link.lebesgue-set-general`

结论只在 Lebesgue 点上成立。

#### 定义引用：「正则 Borel 测度」→ RN 导数的点态公式　`def-link.regular-pointwise`

定理的第一个前提就是 $\nu$ 正则。

#### 定义引用：「RN 导数与 Lebesgue 分解」→ RN 导数的点态公式　`def-link.rn-pointwise`

结论就是：RN 导数等于比值极限。

#### 定义引用：「局部可积」→ RN 导数的点态公式　`def-link.locally-pointwise`

证明中间要推出 $f \in L^{1}_{l}oc$。

#### T_F ± F 递增 ⟹ BV 的 Jordan 分解　`imp.bv-jordan`
*$T_F \pm F$ 递增 $\implies BV$ 的 Jordan 分解*

**(b) 的 $(\Longleftarrow )$ 方向**：若 $F = G - H$（$G$、$H$ 有界递增），则对任意分划

$$\sum|F(x_j) - F(x_{j-1})| \le \sum|G(x_j) - G(x_{j-1})| + \sum|H(x_j) - H(x_{j-1})| = (G(x) - G(-\infty)) + (H(x) - H(-\infty))$$

（递增函数的相邻差非负，可以直接去绝对值。）于是 $T_F(x) \le (G+H)(x) - (G+H)(-\infty) < \infty$，$F \in BV$。

**(b) 的 $(\implies )$ 方向**：由**引理**，$T_F + F$ 与 $T_F - F$ 都递增；它们有界（因为 $F \in BV$ 且 $F$ 有界）。令

$$G := (1/2)(T_F + F), \quad  H := (1/2)(T_F - F)$$

则 $G$、$H$ 有界递增，且

$$G - H = (1/2)(T_F + F) - (1/2)(T_F - F) = F$$

∎

**(a)**：把实部虚部分开即可（$|\operatorname{Re} F| \le |F|$、$|F| \le |\operatorname{Re} F| + |\operatorname{Im} F|$，两边夹）。∎

> ⭐ 这叫「函数版的 Jordan 分解」，与符号测度的 $\nu = \nu ^{+} - \nu ^{-}$ 完全平行 —— 事实上两者通过「测度 $\leftrightarrow NBV$」的对应是同一件事。

#### BV 的 Jordan 分解 + 单调函数几乎处处可导 ⟹ BV 函数的正则性　`imp.bv-regularity`
*化归到递增函数 $\implies BV$ 的正则性*

由**Jordan 分解**，只需对**有界递增**函数证明这三条 —— 差的性质自动继承。

**(c)** 递增函数 $F$ 在每点都有单侧极限：

$$F(x-) = \sup_{y < x} F(y), \quad  F(x+) = \inf_{y > x} F(y)$$

（递增数列的有界单调收敛定理。）同理 $F(\pm \infty) = \sup/\inf$ 也存在。

**(d)** 由**单调函数那条定理**的 (a)：不连续点至多可数。

**(e)** 由同一条定理的 (b)：$F' = G'$ a.e.，其中 $G(x) = F(x+)$。对 $G - H$ 形式的函数两边相减即可。∎

$>$ ⭐ 整个证明的模式很典型：**先证明「递增」这个好情形，再用 Jordan 分解把一般情形搬过去**。

#### 全变差的 NBV 性质 + BV 的 Jordan 分解 ⟹ 测度 ↔ NBV 的一一对应　`imp.borel-nbv`
*NBV 的性质 $\implies$ 测度与函数的一一对应*

**(1) 测度 $\implies$ 函数。** 复测度拆成四个正测度 $\mu = \mu_1^+ - \mu_1^- + i(\mu_2^+ - \mu_2^-)$。令

$$F_j^{\pm }(x) := \mu_j^{\pm }((-\infty, x])$$

每个 $F_j^{\pm }$ 递增、右连续、$F_j^{\pm }(-\infty) = 0$、$F_j^{\pm }(+\infty) = \mu_j^{\pm }(\mathbb{R}) < \infty$。于是 $F$ 是四个这样的函数之组合，属于 NBV。

**(2) 函数 $\implies$ 测度。** 反之任意 $F \in NBV$ 可以写成

$$F = F_1^+ - F_1^- + i(F_2^+ - F_2^-)$$

（用 NBV 版本的 Jordan 分解，注意右连续与 $F(-\infty ) = 0$ 都被差保留。）每个递增右连续、$F(-\infty ) = 0$ 的函数唯一对应一个有限 Borel 测度（取 $\mu ((a,b]) = F(b) - F(a)$，由 Lebesgue–Stieltjes 那一套扩张）；四块加起来即得 $\mu _F$。**唯一性**来自「$\mu$ 由它在 $(-\infty , x]$ 上的值唯一决定」，而后者生成整个 $\mathfrak{B}_\mathbb{R}$。

**$(3) |\mu _F| = \mu _\{T_F\}$。** 由**引理**，$F \in NBV \implies T_F \in NBV$，所以 $\mu_{T_F}$ 有意义。两边都是 NBV 函数，逐点比较：对任意 $x$，

$$\mu_{T_F}((-\infty, x]) = T_F(x) = \sup\{ \sum|F(x_j) - F(x_{j-1})| \} = |\mu_F|((-\infty, x])$$

（中间那个等号是 $|\mu |$ 的全变差定义 + 测度的可数可加性。）由 $(-\infty , x]$ 生成 $\mathfrak{B}_\mathbb{R}$，两个测度相等。∎

#### NBV 函数的导数与测度的关系 + 绝对连续的 ε–δ 刻画 ⟹ 函数绝对连续 ⟺ 测度绝对连续　`imp.ac-measure`
*$\mu_F \ll m$ 的 $\varepsilon$–$\delta$ 刻画 $\implies$ 函数绝对连续 $\iff$ 测度绝对连续*

**$(\Longleftarrow )$** 设 $\mu_F \ll  m$。应用测度版绝对连续的 $\varepsilon$–$\delta$ 刻画（注意 $\mu _F$ 有限，符合前提）：给定 $\varepsilon > 0$ 取 $\delta > 0$ 使

$$m(E) < \delta\quad  \implies\quad  |\mu_F(E)| < \varepsilon$$

现在取有限个两两不交的区间 $(a_j, b_j) \subseteq [a, b]$ 且 $\sum(b_j - a_j) < \delta$，令 $E = \bigsqcup_j (a_j, b_j)$。则 $m(E) < \delta$，于是

$$\sum_j |F(b_j) - F(a_j)| = \sum_j |\mu_F((a_j, b_j])| \le |\mu_F|(E) < \varepsilon$$

这正是函数绝对连续的定义。

**$(\implies )$** 设 $F$ 绝对连续，$E \in \mathfrak{B}_\mathbb{R}$、$m(E) = 0$，要证 $\mu_F(E) = 0$。由 $\mu _F$ 的正则性取递减开集列 $U_1 \supseteq U_2 \supseteq \cdots \supseteq E$ 使 $m(U_k) < \delta$、$\bigcap_k U_k = E$。每个 $U_{k}$ 是区间的可数不交并，把函数绝对连续性的条件用在 $U_{k}$ 的有限截断上，得到 $|\mu_F(U_j)| < \varepsilon$；再由测度的上连续性（递减列，首项有限）得

$$|\mu_F(E)| = \lim_j |\mu_F(U_j)| \le \varepsilon$$

由 $\varepsilon$ 任意，$\mu_F(E) = 0$。故 $\mu_F \ll  m$。∎

#### AC ⊆ BV + 函数绝对连续 ⟺ 测度绝对连续 + NBV 函数的导数与测度的关系 ⟹ 微积分基本定理（Lebesgue 版）　`imp.ftc`
*$(a) \iff (b) \iff (c)$：微积分基本定理的三条等价*

**$(a) \implies (b)$。** 设 $F$ 绝对连续。由**$AC \subseteq BV$**，$F \in BV$；把它补成 NBV 里的函数（差一个常数与右连续化，不影响导数的积分）。由**绝对连续 $\iff \mu _F \ll m$**，写 Lebesgue 分解时奇异部分 $\lambda = 0$，于是 $d\mu_F = f\cdot dm$，即

$$F(x) - F(a) = \int_a^x f(t) dt$$

取 $f$ 就是所要的 $L^{1}$ 函数。

**$(b) \implies (c)$。** 若 $F(x) - F(a) = \int_a^x f$，则由积分的绝对连续性，$F$ 绝对连续（这是直接验证）；而由**微分定理**，$d / dx\int_a^x f = f(x)$ a.e.，故 $F' = f$ a.e.、$F' \in L^1$，公式成立。

**$(c) \implies (a)$。** 由 (c)，$F$ 在 a.e. 意义下等于一个积分的原函数；把 $F(x) - \int_a^x F'$ 这个差记作 $G$，则 $G$ 绝对连续（$(b) \implies F$ 的那一段）且 $G' = 0 \text{a.e.}$；再由 (b) 的构造（$\mu _G \ll m$ 且密度为 $F' - F' = 0$）得 $G \equiv 0$。故 $F$ 本身绝对连续。∎

$>$ ⭐ 最容易错的直觉是「a.e. 可导 $F' \in L^{1}$ 就够」——**Cantor 函数**正是反例：它 a.e. 可导、$F' \equiv 0 \in L^{1}$，但 $\int _{0}^{1} F' = 0 \ne 1$。**绝对连续这一条不能省。**

> 这条定理是整个「有界变差 / 绝对连续」星团的收官：它把函数侧、积分侧、导数侧三个刻画焊在一起。

#### 定义引用：「有界变差 BV」→ BV 的例子与基本性质　`def-link.bv-variation`

几个例子都是在算 T_F。

#### 定义引用：「有界变差 BV」→ T_F ± F 递增　`def-link.bv-jordan-lemma`

引理里的 T_F 就是全变差函数。

#### 定义引用：「有界变差 BV」→ BV 的 Jordan 分解　`def-link.bv-jordan-thm`

定理的两边都是 BV 这个类。

#### 定义引用：「有界变差 BV」→ BV 函数的正则性　`def-link.bv-regularity-thm`

正则性命题是在 BV 上说的。

#### 定义引用：「NBV」→ 全变差的 NBV 性质　`def-link.nbv-lemma`

引理要为 NBV 服务（T_F 也要落在 NBV 里）。

#### 定义引用：「有界变差 BV」→ 测度 ↔ NBV 的一一对应　`def-link.bv-nbv-thm`

对应定理的左边整块都是 BV 的变体。

#### 定义引用：「测度」→ 测度 ↔ NBV 的一一对应　`def-link.measure-nbv-thm`

另一边是 $\mathbb{R}$ 上的复 Borel 测度。

#### 定义引用：「绝对连续函数」→ 函数绝对连续 ⟺ 测度绝对连续　`def-link.ac-function-ift`

这条命题就是要给「绝对连续函数」一个测度论的解释。

#### 定义引用：「绝对连续」→ 函数绝对连续 ⟺ 测度绝对连续　`def-link.ac-measure-ift`

同时用到测度版的绝对连续。

#### 定义引用：「绝对连续函数」→ 微积分基本定理（Lebesgue 版）　`def-link.ac-ftc`

(a) 就是绝对连续的定义。

#### 定义引用：「可积 / L¹」→ 微积分基本定理（Lebesgue 版）　`def-link.integrable-ftc`

(b)(c) 里的 $f$、$F'$ 都要求在 $L^{1}$ 里。

#### 定义引用：「NBV」→ 积出来的函数是 AC · NBV　`def-link.nbv-ftc`

推论同时落在 NBV 与 AC 的交里。

#### Young 不等式 ⟹ Hölder 不等式　`imp.holder`
*Young 不等式 $\implies$ Hölder 不等式*

**① 先设 $\|f\|_p = \|g\|_q = 1$。** 在 Young 不等式里取

$$a = |f(x)|^p, \qquad b = |g(x)|^q, \qquad \lambda = \frac{1}{p}, \qquad 1 - \lambda = \frac{1}{q}$$

得逐点不等式

$$|f(x)g(x)| \le \frac{|f(x)|^p}{p} + \frac{|g(x)|^q}{q}$$

**② 积分。**

$$\int |fg| \le \frac{1}{p} \int |f|^p + \frac{1}{q} \int |g|^q = \frac{1}{p} + \frac{1}{q} = 1$$

**③ 一般情形。** 若 $\|f\|_p$、$\|g\|_q$ 都非零，把 $f / \|f\|_p$ 与 $g / \|g\|_q$ 代进去再用齐次性。若有一个为零，则 $fg = 0$ a.e.，两边都是 0。∎

**④ 取等条件。** 回看 ②：等号成立要求 ① 里每一步都取等，即 $a = b$ a.e.（Young 不等式的取等条件），也就是

$$|f|^p = |g|^q \quad \text{a.e.}$$
在归一化之后；还原到一般情形就是「$|f|^p$ 与 $|g|^q$ 成比例 a.e.」。

#### Hölder 不等式 ⟹ Minkowski 不等式　`imp.minkowski`
*Hölder 不等式 $\implies$ Minkowski 不等式*

**① 拆开。** 对 $p > 1$，

$$|f+g|^p = |f+g| \cdot |f+g|^{p-1} \le \left( |f| + |g| \right) |f+g|^{p-1}$$

**② 两次 Hölder。** 对 $|f| \cdot |f+g|^{p-1}$ 与 $|g| \cdot |f+g|^{p-1}$ 分别用 Hölder（指数 $p$ 与 $q$，其中 $1/p + 1/q = 1$）：

$$\int |f+g|^p \le \left( \|f\|_p + \|g\|_p \right) \left( \int |f+g|^{(p-1)q} \right)^{1/q}$$

**③ 认出右边的积分。** 因为 $(p-1)q = p$，右边那个因子就是 $\|f+g\|_p^{\,p/q}$。于是

$$\|f+g\|_p^p \le \left( \|f\|_p + \|g\|_p \right) \|f+g\|_p^{\,p/q}$$

**④ 约掉。** 若 $\|f+g\|_p = 0$ 结论平凡；否则两边除以 $\|f+g\|_p^{p/q}$，注意 $p - p/q = 1$，即得

$$\|f+g\|_p \le \|f\|_p + \|g\|_p$$

$p = 1$ 时直接由逐点不等式 $|f+g| \le |f| + |g|$ 积分得到。∎

> ⭐ 注意「约掉」那一步：正是 $1/p + 1/q = 1$ 保证 $p - p/q = 1$，否则会留下一个顽固的指数。

#### Minkowski 不等式 + 单调收敛定理 + 控制收敛定理 ⟹ L^p 是 Banach 空间　`imp.lp-banach`
*三角不等式 + MCT + DCT $\implies$ $L^p$ 完备*

**① 换成级数。** 赋范线性空间完备 $\iff$ 每个**绝对收敛**的级数都收敛（标准判据）。所以设 $\{f_k\} \subseteq L^p$ 且

$$B := \sum_{k=1}^{\infty} \|f_k\|_p < \infty$$

目标：证明 $\sum_k f_k$ 在 $L^p$ 范数下收敛。

**② 先做逐点收敛。** 令

$$G_n := \sum_{k \le n} |f_k|, \qquad G := \sum_{k=1}^{\infty} |f_k|$$

由 **Minkowski**（三角不等式），$\|G_n\|_p \le \sum_{k \le n} \|f_k\|_p \le B$，即 $\int G_n^p \le B^p$。$G_n \uparrow G$，由 **MCT**，

$$\int G^p = \lim_n \int G_n^p \le B^p$$
于是 $G \in L^p$，特别地 $G < \infty$ a.e.。这就说明 $\sum_k f_k(x)$ 对 a.e. $x$ **绝对收敛**，记其和为 $F$。

**③ 再做范数收敛。** 部分和 $s_n := \sum_{k \le n} f_k$ 满足 $s_n \to F$ a.e.，且

$$|F - s_n|^p \le \left( |F| + |s_n| \right)^p \le (2G)^p \in L^1$$

（因为 $|F| \le G$、$|s_n| \le G$。）由 **DCT**，

$$\left\| F - s_n \right\|_p^p = \int |F - s_n|^p \to 0$$

即 $s_n \to F$ 于 $L^p$。故绝对收敛级数都收敛，$L^p$ 完备。∎

$>$ ⭐ 这一段是「用逐点收敛的定理（MCT / DCT）去证范数收敛」的范例：控制函数 $G$ 就是关键桥梁。

#### Hölder 不等式 + 对偶配对 φ_g ⟹ 有界 ⟹ g ∈ L^q　`imp.bounded-gives-lq`
*Hölder + 有界性 $\implies$ $g \in L^q$*

**Step 1：有限支可测的 $f$ 也满足 $|\int fg| \le M_g(g)$。**

设 $f$ 有限支可测、$\|f\|_p = 1$。取**有限支简单函数列** $\{f_n\} \to f$ a.e.，且 $|f_n| \le |f|$、$|f_n| \le \|f\|_\infty \chi_E$（$E$ 是 $f$ 的支集，有限测度）。由 **DCT**，

$$\left| \int fg \right| = \lim_n \left| \int f_n g \right| \le M_g(g)$$

**Step 2：$q < \infty$。** 不妨设 $g \ne 0$，且设 $\{g \ne 0\}$ $\sigma$有限（$\mu$ 半有限时这一点自动成立）。

先说明**必须**有 $\mu(\{|g| > \varepsilon\}) < \infty$（对一切 $\varepsilon > 0$）：否则设 $E_\varepsilon = \{|g| > \varepsilon\}$ 测度无穷，对任意 $C$ 取 $B \subseteq E_\varepsilon$ 使 $C < \mu(B) < \infty$，令

$$f = \mu(B)^{-1/q} \chi_B \operatorname{sgn} g, \qquad \|f\|_p = 1$$

则 $\left| \int fg \right| = \mu(B)^{-1/q} \int_B |g| > \varepsilon \, \mu(B)^{1/p} > \varepsilon C^{1/p}$，令 $C \to \infty$ 就与 $M_g(g) < \infty$ 矛盾。

于是可取 $\{E_n\} \uparrow \{g \ne 0\}$，$\mu(E_n) < \infty$；再取简单 $\varphi_n \to g$、$|\varphi_n| \le |g|$，令 $g_n := \varphi_n \chi_{E_n}$，则 $g_n \to g$、$|g_n| \le |g|$、且 $g_n$ 在 $E_n^c$ 外为零。令

$$f_n := \frac{|g_n|^{q-1} \operatorname{sgn} g_n}{\|g_n\|_q^{\,q-1}}, \qquad \|f_n\|_p = 1$$

则 $f_n$ 有限支，由 Step 1 可用。于是

$$\|g\|_q \le \lim_n \|g_n\|_q = \lim_n \int f_n g_n \le \lim_n \int |f_n g| = \lim_n \int f_n g \le M_g(g)$$

（第一个不等号由 Fatou，第二个是 $f_n g_n = |g_n|^q$，中间那个等号用的仍是符号 $\operatorname{sgn}$ 的消失。）故 $\|g\|_q \le M_g(g) < \infty$，$g \in L^q$；反向不等式 $M_g(g) \le \|g\|_q$ 由 Hölder。

**Step 3：$q = \infty$。** 对 $\varepsilon > 0$ 令 $A = \{|g(x)| \ge M_\infty(g) + \varepsilon\}$。若 $\mu(A) > 0$，由半有限性或 $A \subseteq \{g \ne 0\}$ 的 $\sigma$有限性取 $B \subseteq A$、$0 < \mu(B) < \infty$，令 $f = \mu(B)^{-1} \chi_B \operatorname{sgn} g$，则 $\|f\|_1 = 1$ 而 $\int fg \ge M_\infty(g) + \varepsilon$ —— 矛盾。故 $\mu(A) = 0$，即 $\|g\|_\infty \le M_\infty(g)$；反方向由 Hölder。∎

#### 有界 ⟹ g ∈ L^q + Lebesgue–Radon–Nikodym 定理 + ‖g‖_q = ‖φ_g‖ ⟹ (L^p)* ≅ L^q　`imp.riesz-lp`
*把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$*

设 $1 < p < \infty$、$\Phi \in (L^p)^*$。

**Step 1：先设 $\mu$ 有限。** 此时所有简单函数都在 $L^p$ 里。定义

$$\nu(E) := \Phi(\chi_E) \qquad (E \in \mathcal{M})$$

**① $\nu$ 是复测度。** 设 $E = \bigsqcup_j E_j$，则 $\chi_E = \sum_{j} \chi_{E_j}$。而

$$\left\| \chi_E - \sum_{j \le n} \chi_{E_j} \right\|_p = \left\| \sum_{j > n} \chi_{E_j} \right\|_p = \mu\left( \bigsqcup_{j>n} E_j \right)^{1/p} \to 0$$

由 $\Phi$ 的连续性，$\nu(E) = \sum_j \nu(E_j)$ —— 正是复测度的定义。

**② $\nu \ll \mu$。** 若 $\mu(E) = 0$，则 $\chi_E = 0$ 于 $L^p$，故 $\nu(E) = 0$。

**③ 用 Radon–Nikodym。** 存在 $g \in L^1(\mu)$ 使 $\nu(E) = \int_E g \, d\mu$，即

$$\Phi(\chi_E) = \int \chi_E g \, d\mu$$
对一切简单函数 $f$ 就有 $\Phi(f) = \int fg \, d\mu$（线性）。

**④ 把 $g$ 提升到 $L^q$。** 由 $\left| \int fg \right| = |\Phi(f)| \le \|\Phi\| \, \|f\|_p$，有界泛函那条命题给出 $g \in L^q$ 且 $\|g\|_q \le \|\Phi\|$。再由稠密性（简单函数在 $L^p$ 稠密、$\Phi$ 连续）得 $\Phi(f) = \int fg$ 对**一切** $f \in L^p$ 成立。

**Step 2：$\mu$ $\sigma$有限。** 取 $\{E_n\} \uparrow$、$0 < \mu(E_n) < \infty$、$X = \bigcup_n E_n$，并把 $L^p(E_n)$ 等同于「在 $E_n$ 外为零的 $L^p(X)$ 函数」。对每个 $n$ 用 Step 1 得 $g_n \in L^q(E_n)$，且

$$\|g_n\|_q \le \left\| \Phi|_{L^p(E_n)} \right\| \le \|\Phi\|$$
唯一性（a.e.）给出 $g_n = g_m$ a.e. 于 $E_n$（$n < m$），所以它们拼成一个 a.e. 良定义的 $g$。由 **MCT**，$\|g\|_q = \lim_n \|g_n\|_q \le \|\Phi\|$，故 $g \in L^q$；而对 $f \in L^p$，由 **DCT** $f\chi_{E_n} \to f$ 于 $L^p$，于是 $\Phi(f) = \lim_n \Phi(f\chi_{E_n}) = \lim_n \int_{E_n} fg = \int fg$。

**Step 3：$\mu$ 任意（此时 $p > 1$，故 $q < \infty$）。** 对每个 $\sigma$有限集 $E \subseteq X$，Step 2 给出 a.e. 唯一的 $g_E \in L^q(E)$ 使 $\Phi(f) = \int f g_E$ 对一切 $f \in L^p(E)$ 成立，且 $\|g_E\|_q \le \|\Phi\|$。若 $F \supseteq E$ 也 $\sigma$有限，则 $g_F = g_E$ a.e. 于 $E$，因而 $\|g_F\|_q \ge \|g_E\|_q$。令

$$M := \sup \{\, \|g_E\|_q : E \text{ 是 }\sigma\text{-有限集} \,\} \le \|\Phi\|$$

取 $\{E_n\}$ 使 $\|g_{E_n}\|_q \to M$，令 $F = \bigcup_n E_n$（仍 $\sigma$有限）。则 $\|g_F\|_q \ge \|g_{E_n}\|_q$ 对一切 $n$ 成立，故 $\|g_F\|_q = M$。

**$g_F$ 已经是我们要的那个 $g$**：设 $A \supseteq F$ $\sigma$有限，则

$$\int |g_F|^q + \int |g_{A \setminus F}|^q = \int |g_A|^q \le M^q = \int |g_F|^q$$

故 $g_{A \setminus F} = 0$，即 $g_A = g_F$ a.e.。而对 $f \in L^p$，集合 $A := F \cup \{f \ne 0\}$ 是 $\sigma$有限的，于是 $\Phi(f) = \int f g_A = \int f g_F$。取 $g = g_F$ 即可。∎

> ⭐ Step 1 的核心思想：**把 $L^p$ 上的泛函限制在「特征函数」上，就得到一个测度**，再用 Radon–Nikodym 把测度变成函数。

#### 定义引用：「L^p 范数」→ Hölder 不等式　`def-link.lp-holder`

Hölder 不等式两边都是 L^p 范数。

#### 定义引用：「共轭指数」→ Hölder 不等式　`def-link.conjugate-holder`

陈述里那个 $1/p + 1/q = 1$ 就是共轭指数的定义。

#### 定义引用：「L^p 范数」→ Minkowski 不等式　`def-link.lp-minkowski`

Minkowski 就是 L^p 范数的三角不等式。

#### 定义引用：「L^p 范数」→ L^p 是 Banach 空间　`def-link.lp-banach`

完备性是相对这个范数说的。

#### 定义引用：「本性上界与 L^∞」→ L^∞ 的性质　`def-link.esssup-linf`

整条定理都是在处理 $\|\cdot \|_\infty$。

#### 定义引用：「对偶配对 φ_g」→ ‖g‖_q = ‖φ_g‖　`def-link.duality-holder`

命题算的就是 $\varphi _g$ 的算子范数。

#### 定义引用：「共轭指数」→ ‖g‖_q = ‖φ_g‖　`def-link.conjugate-duality`

前提是 $p$、$q$ 共轭。

#### 定义引用：「对偶配对 φ_g」→ 有界 ⟹ g ∈ L^q　`def-link.duality-bounded`

这条命题说的正是「配对 $\int fg$ 有界」把 $g$ 逼进 L^q。

#### 定义引用：「共轭指数」→ (L^p)* ≅ L^q　`def-link.conjugate-riesz`

结论那句话里「$q$ 是共轭指数」。

#### 定义引用：「对偶配对 φ_g」→ (L^p)* ≅ L^q　`def-link.duality-riesz`

定理说 $g \mapsto \varphi _g$ 是等距同构。

#### 定义引用：「L^p 范数」→ L^p 自反　`def-link.lp-reflexive`

自反性谈的是 L^p 与它的二次对偶。

#### 定义引用：「实数系 ℝ」→ 扩充实数 [−∞,+∞]　`dep.real-extended`

扩充实数就是在 $\mathbb{R}$ 上添两个记号。

#### 定义引用：「实数系 ℝ」→ 区间　`dep.real-interval`

区间是 $\mathbb{R}$ 的全序 $\le$ 说出来的：端点之间的都算数。

#### 定义引用：「实数系 ℝ」→ 数列极限　`dep.real-sequence`

极限里的 $|x_n - x| < \varepsilon$ 用的是实数的绝对值与序。

#### 定义引用：「数列极限」→ 级数收敛　`dep.real-series`

级数收敛 = 部分和这个**数列**收敛。

#### 定义引用：「数列极限」→ 连续　`dep.real-continuous`

连续的定义就是「$x \to x_0$ 时 $f(x) \to f(x_0)$」——极限的语言。

#### 定义引用：「数列极限」→ 导数　`dep.real-derivative`

导数是一个**极限**：差商的极限。

#### 定义引用：「连续」→ 导数　`dep.continuous-derivative`

可导 $\implies$ 连续：这一点由导数的定义直接推出来。

#### 定义引用：「实数系 ℝ」→ 复数 ℂ　`dep.real-complex`

$\mathbb{C} = \mathbb{R}^2$，实部虚部都是实数。

#### 定义引用：「界与确界」→ 级数收敛　`dep.sup-series`

非负项级数取的就是部分和的**上确界**。

#### 定义引用：「子集」→ 并集与交集　`dep.subset-union-inter`

两个运算都用 $\subseteq$ 说事（$A \cap B \subseteq A \subseteq A \cup B$）。

#### 定义引用：「子集」→ 差集与补集　`dep.subset-diff`

$A \setminus B \subseteq A$；「含全集 $X$」也是子集关系。

#### 定义引用：「空集 ∅」→ 空集存在　`dep.ext-empty`

$\emptyset$ 先作为原始对象给出；这条定理说明**不把它当原始对象、只靠分离公理模式**也能得到同一个集合，并由外延公理知它唯一。

#### 定义引用：「空集 ∅」→ 并集与交集　`dep.empty-union`

$\bigcap \emptyset$ 要注意：它必须相对某个全集才有意义 —— 空集的出现方式常常是这种边角。

#### 定义引用：「函数」→ 单射 / 满射 / 双射　`dep.function-bijection`

单射、满射、双射都是**函数**的性质。

#### 定义引用：「有序对」→ 单射 / 满射 / 双射　`dep.pair-bijection`

判断单射时用的是「$f(a) = f(b) \implies a = b$」，即在有序对层面比较。

#### 定义引用：「单射 / 满射 / 双射」→ 可数与不可数　`dep.bijection-countable`

可数就是「存在双射 $A \to \mathbb{N}$」；至多可数是「存在单射」。

#### 定义引用：「自然数集存在」→ 可数与不可数　`dep.nat-countable`

$\mathbb{N}$ 由无穷公理给出（见「自然数集存在」），可数就是拿它当标尺去量别的集合。

#### 定义引用：「零集与完备」→ 几乎处处　`dep.nullset-ae`

a.e. 的定义就是「例外集是**零集**」。

#### 定义引用：「测度」→ 几乎处处　`dep.measure-ae`

$\mu(E) = 0$ 里的 $\mu$ 是测度；a.e. 是测度空间上的说法。

#### 定义引用：「区间」→ 基本类　`dep.interval-ls`

半开区间族 $\{ (a, b] : a < b \}$ 就是构造 Lebesgue–Stieltjes 测度时用的那个**基本类**。

#### 定义引用：「界与确界」→ 非负函数的积分　`dep.sup-integral-nonneg`

非负函数的积分定义成 $\sup \{ \int \varphi \}$ —— 取的是实数（或 $+\infty$）的上确界。

#### 定义引用：「扩充实数 [−∞,+∞]」→ 测度　`dep.extended-measure`

测度的取值放在 $[0, +\infty]$ 里，正是扩充实数。

#### 定义引用：「实数系 ℝ」→ 距离空间　`dep.real-metric`

距离取值 $d : X \times X \to [0, +\infty) \subseteq \mathbb{R}$，用的是实数的序与绝对值。

#### 定义引用：「区间」→ 绝对连续函数　`dep.interval-bv`

绝对连续的定义里，「任意有限个两两不交的区间」说的就是区间。

#### 定义引用：「导数」→ 有界变差 BV　`dep.derivative-bv`

全变差与 $F'$ 都在讨论函数的**逐点**行为。

#### 定义引用：「导数」→ 单调函数几乎处处可导　`dep.derivative-monotone-thm`

「单调函数几乎处处可导」说的就是这条定义里的导数存在 a.e.。

#### 定义引用：「复数 ℂ」→ 复函数的积分　`dep.complex-integral-complex`

复值函数的积分就是拆成 $\operatorname{Re} f$、$\operatorname{Im} f$ 两个实值积分。

#### 定义引用：「复数 ℂ」→ 复测度　`dep.complex-complex-measure`

复测度取值在 $\mathbb{C}$ 里 —— 所以它自动有限。

#### 定义引用：「复数 ℂ」→ L^p 范数　`dep.complex-lp`

$L^p$ 的元素取复值：$f : X \to \mathbb{C}$。

#### 定义引用：「连续」→ 连续 ⟹ Borel 可测　`dep.continuous-continuous-measurable`

「连续 $\implies$ Borel 可测」要把连续的 $\varepsilon$-$\delta$ 定义翻译成开集的原像。

#### 定义引用：「实数系 ℝ」→ 本性上界与 L^∞　`dep.real-lp`

本性上界是「$\mu(\{|f| > a\}) = 0$ 的那些 $a \ge 0$ 的下确界」——$a$ 是实数。

#### 定义引用：「子集」→ 幂集 𝒫(X)　`dep.subset-powerset`

幂集的元素就是**子集**：$A \in \mathcal{P}(X) \iff A \subseteq X$。

#### 定义引用：「单射 / 满射 / 双射」→ 等势　`dep.bijection-equinumerous`

等势的定义就是「存在**双射**」。

#### 定义引用：「等势」→ 基数 |A|　`dep.equinumerous-cardinal`

基数就是等势类：先有「等势」，才谈得上「$A$ 有多大」。

#### 定义引用：「等势」→ 可数与不可数　`dep.equinumerous-countable`

可数 = 与 $\mathbb{N}$ **等势**；至多可数 = 能单射进 $\mathbb{N}$。

#### 定义引用：「基数 |A|」→ Cantor 定理　`dep.cardinal-cantor`

「$|A| < |\mathcal{P}(A)|$」是一个关于**基数**的比较。

#### 定义引用：「幂集 𝒫(X)」→ Cantor 定理　`dep.powerset-cantor`

定理讲的就是 $A$ 与它的**幂集**的大小关系。

#### 定义引用：「单射 / 满射 / 双射」→ Schröder–Bernstein 定理　`dep.bijection-sb`

前提与结论都由**单射 / 双射**写成。

#### 定义引用：「基数 |A|」→ 基数可比定理　`dep.cardinal-comparable-thm`

「任意两个基数可比」是关于**基数**的命题。

#### 定义引用：「幂集 𝒫(X)」→ 生成的 σ-代数　`dep.powerset-generated-sigma`

「$\mathcal{E} \subseteq \mathcal{P}(X)$」「一切包含 $\mathcal{E}$ 的 $\sigma$-代数之交」都要在**幂集**里取。

#### 定义引用：「幂集 𝒫(X)」→ 外测度　`dep.powerset-outer-measure`

外测度定义在**全体子集**上：$\mu^* : \mathcal{P}(X) \to [0, +\infty]$。

#### 幂集 𝒫(X) ⟹ Cantor 定理　`imp.cantor`
*幂集 $\implies$ Cantor 定理（对角线法）*

**① $|A| \le |\mathcal{P}(A)|$。** 映射 $a \mapsto \{a\}$ 是单射：$\{a\} = \{a'\} \implies a = a'$。

**② 不存在满射 $f : A \to \mathcal{P}(A)$。** 反设存在。令

$$D := \{ a \in A : a \notin f(a) \}$$

这是 $A$ 的一个子集，所以 $D \in \mathcal{P}(A)$。由满射性，存在 $a_0 \in A$ 使 $f(a_0) = D$。

**③ 矛盾。** 看 $a_0$ 属不属于 $D$：

- 若 $a_0 \in D$：由 $D$ 的定义 $a_0 \notin f(a_0) = D$，矛盾；
- 若 $a_0 \notin D = f(a_0)$：那么 $a_0$ 满足「$a \notin f(a)$」，按定义又该有 $a_0 \in D$，矛盾。

两边都不成立，故不存在满射。结合 ① 得 $|A| < |\mathcal{P}(A)|$。$\blacksquare$

> $D$ 之所以叫「对角集」：把 $A$ 排成行、把 $\mathcal{P}(A)$ 排成列，「$a \in f(a)$」是一张表，$D$ 取的是这张表的**对角线**再逐格取反。

#### 单射 / 满射 / 双射 ⟹ Schröder–Bernstein 定理　`imp.schroder-bernstein`
*两个方向的单射 $\implies$ 双射*

设 $f : A \to B$、$g : B \to A$ 都是单射。把 $A$ 分成两半，一半用 $f$、一半用 $g^{-1}$，拼出一个双射。

**① 造一串集合。** 令

$$A_0 := A \setminus g(B), \qquad A_{n+1} := g(f(A_n))$$

（直观：$A_0$ 是「$B$ 管不到」的那部分，剩下的在 $f$ 与 $g$ 之间来回倒。）令

$$A^{*} := \bigcup_{n=0}^{\infty} A_n, \qquad A^{\sharp} := A \setminus A^{*}$$

**② 定义 $h : A \to B$。**

$$h(a) := \begin{cases} f(a), & a \in A^{*} \\ g^{-1}(a), & a \in A^{\sharp} \end{cases}$$

要说明：$a \in A^{\sharp}$ 时 $a \in g(B)$，所以 $g^{-1}(a)$ 有意义。事实上若 $a \notin g(B)$ 则 $a \in A_0 \subseteq A^{*}$，与 $a \in A^{\sharp}$ 矛盾。

**③ $h$ 是单射。** 分三种情况：同在 $A^{*}$ 上由 $f$ 单射；同在 $A^{\sharp}$ 上由 $g$ 单射；一边一个时，$h(A^{*}) = f(A^{*})$ 而

$$f(A^{*}) = \bigcup_{n} f(A_n) = \bigcup_{n} g^{-1}(A_{n+1}) \subseteq g^{-1}(A^{*} \setminus A_0)$$

与 $h(A^{\sharp}) = g^{-1}(A^{\sharp})$ 不相交 —— 因为 $A^{\sharp} \cap (A^{*} \setminus A_0) = \emptyset$。

**④ $h$ 是满射。** 若 $b \in B$：令 $a = g(b) \in A$。若 $a \in A^{\sharp}$，则 $h(a) = g^{-1}(a) = b$；若 $a \in A^{*}$，则 $a \in A_n$ 对某个 $n \ge 1$（因为 $a = g(b)$ 落在 $g(B)$ 里），于是 $a = g(f(a'))$ 对某个 $a' \in A_{n-1} \subseteq A^{*}$，由 $g$ 单射得 $f(a') = b$，即 $h(a') = b$。

综上 $h$ 是双射，故 $|A| = |B|$。$\blacksquare$

#### 良序定理 ⟹ 基数可比定理　`imp.cardinal-comparable`
*良序定理 $\implies$ 任意两个基数可比*

设 $A$、$B$ 是任意两个集合。

**① 良序化。** 由**良序定理**，$A$ 上有一个良序 $\preceq_A$、$B$ 上有一个良序 $\preceq_B$。

**② 换成序数。** 每个良序集序同构于唯一的一个序数，记作 $\alpha$、$\beta$。于是只需比较两个序数。

**③ 序数可比。** 对任意两个序数 $\alpha$、$\beta$，总有 $\alpha \in \beta$、$\alpha = \beta$、$\beta \in \alpha$ 三者之一成立（这一步是序数理论的基本事实，用的是良序性）。

- 若 $\alpha \subseteq \beta$：序同构给出单射 $A \to B$，于是 $|A| \le |B|$；
- 若 $\beta \subseteq \alpha$：同理 $|B| \le |A|$。

所以必有 $|A| \le |B|$ 或 $|B| \le |A|$。$\blacksquare$

> 反过来说：**基数可比定理 $\implies$ 良序定理**（取 $A$、$B$ 中能单射进另一个的那个方向，可以良序化较小的集合，再把良序搬到较大集合上）。所以它与 AC、良序定理、佐恩引理是同一件事。

#### 定义引用：「幂集 𝒫(X)」→ 拓扑空间与开集　`dep.powerset-topology`

拓扑是**幂集**的一族子集：$\mathcal{T} \subseteq \mathcal{P}(X)$。

#### 定义引用：「子集」→ 拓扑空间与开集　`dep.subset-topology`

「开集是 $X$ 的子集」「$\mathcal{T}$ 作为集合族」都是子集关系。

#### 定义引用：「拓扑空间与开集」→ 闭集与闭包　`dep.topology-closed`

闭集定义成**开集**的补，开集的性质靠 De Morgan 律翻译过去。

#### 定义引用：「差集与补集」→ 闭集与闭包　`dep.diff-complement-closed`

「补集」这条定义是闭集定义的直接依据。

#### 定义引用：「拓扑空间与开集」→ 基与子基　`dep.topology-base`

基是**开集族**里挑了「表现良好」的一部分：每个开集都由它并出来。

#### 定义引用：「拓扑空间与开集」→ 连续映射　`dep.topology-continuous-map`

连续映射说的是「$\mathcal{T}_Y$ 里每个开集的原像落在 $\mathcal{T}_X$ 里」。

#### 定义引用：「单射 / 满射 / 双射」→ 同胚　`dep.bijection-homeo`

同胚首先是**双射**，再要求两个方向都连续。

#### 定义引用：「连续映射」→ 同胚　`dep.continuous-map-homeo`

「$f$ 与 $f^{-1}$ 都连续」用的是**连续映射**。

#### 定义引用：「拓扑空间与开集」→ 距离空间　`dep.topology-metric`

$d$ 诱导出的那族开集（开球之并）就是这条定义里的拓扑：三条公理逐条可验（任意并由球的定义封闭，有限交由三角不等式保证）。所以**每个距离空间都是拓扑空间**，反之不成立。

#### 定义引用：「拓扑空间与开集」→ Borel σ-代数　`dep.topology-borel`

Borel $\sigma$-代数就是「设 $X$ 是**拓扑空间**，取全体开集生成的 $\sigma$-代数」。

#### 定义引用：「拓扑空间与开集」→ 连续　`dep.topology-engine-continuous`

$\varepsilon$-$\delta$ 那套是**拓扑版连续**在实数（或距离空间）上的展开形式：开球就是 $\varepsilon$ 邻域。

#### 定义引用：「闭集与闭包」→ 紧子集是闭的　`dep.closed-set-compact-closed`

「紧子集是闭的」里的「闭」就是这条定义的闭集。

#### 定义引用：「基与子基」→ 距离空间　`dep.base-metric`

距离空间里「开球全体构成这个拓扑的一组**基**」——这就是基的定义的一个标准例子。

#### 定义引用：「关系」→ 商集与等价类　`dep.rel-quotient`

商集是拿**等价关系**做出来的 —— 先有关系，才谈得上等价类。

#### 定义引用：「自然数集存在」→ 归纳原理与递推定义　`dep.omega-induction`

归纳原理与递推定义都来自「$\omega$ 是**最小归纳集**」这一条。

#### 定义引用：「自然数集存在」→ 整数 ℤ　`dep.omega-int`

$\mathbb{Z}$ 建在 $\mathbb{N} \times \mathbb{N}$ 上，运算与序都来自 $\mathbb{N}$。

#### 定义引用：「商集与等价类」→ 整数 ℤ　`dep.quotient-int`

$\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/\sim$ —— 一个**商集**。

#### 定义引用：「归纳原理与递推定义」→ 整数 ℤ　`dep.induction-int`

加法、乘法、序的**良定义**都要用归纳/递推来验。

#### 定义引用：「整数 ℤ」→ 有理数 ℚ　`dep.int-rat`

$\mathbb{Q}$ 建在 $\mathbb{Z} \times (\mathbb{Z}\setminus\{0\})$ 上。

#### 定义引用：「商集与等价类」→ 有理数 ℚ　`dep.quotient-rat`

$\mathbb{Q} = (\mathbb{Z} \times (\mathbb{Z}\setminus\{0\}))/\sim$ —— 同样是**商集**。

#### 定义引用：「有理数 ℚ」→ Cauchy 列与零列　`dep.rat-cauchy-null`

Cauchy 列、零列都是**有理数列**：$\varepsilon$ 取正有理数，绝对值也是 $\mathbb{Q}$ 上的 —— 用 $\mathbb{Q}$ 的序与四则运算就够，不必先有 $\mathbb{R}$。

#### 定义引用：「函数」→ Cauchy 列与零列　`dep.function-cauchy-null`

「数列」就是函数 $\omega \to \mathbb{Q}$；下标、子列都是函数语言。

#### 定义引用：「商集与等价类」→ Cauchy 列与零列　`dep.quotient-cauchy-null`

「等价」在这里就是商集意义上的**等价关系**：把同一个实数的不同逼近方式粘成一类。

#### 定义引用：「有序域」→ 有理数 ℚ　`dep.ordered-rat`

⭐ 造完 $\mathbb{Q}$ 的第一件事是**核对它是哪一种结构**：四则运算齐全（域）、序与运算相容（有序域）—— 它是本图里第一个**有序域**。

#### 定义引用：「有序域」→ 绝对值 |x|　`dep.ordered-abs`

绝对值定义在**有序域**上（$\mathbb{Q}$ 与 $\mathbb{R}$ 都是）。

#### 定义引用：「有序域」→ 三角不等式　`dep.ordered-triangle`

三角不等式对任意有序域成立 —— 证明只用到分情形与「序与加法相容」。

#### 定义引用：「有序域」→ ℝ 是完备有序域　`dep.ordered-realfield`

要证的就是「构造出来的 $\mathbb{R}$ 是一个**完备有序域**」：前两组公理是「有序域」，第三组是不属于这条定义的额外一条。

#### 定义引用：「有序域」→ 阿基米德性质　`dep.ordered-archimedean`

「$\mathbb{N}$ 在 $K$ 中无上界」里的 $K$ 是**有序域**（$\mathbb{N}$ 按 $1$ 生成的子结构嵌在里面）。

#### 定义引用：「有序域」→ 完备有序域的唯一性　`dep.ordered-unique`

定理说的「完备有序域」就是这条定义再加上完备性。

#### 定义引用：「绝对值 |x|」→ Cauchy 列与零列　`dep.abs-cauchy-null`

Cauchy 列的定义式 $|x_m - x_n| < \varepsilon$ 里的 $|\cdot|$ 就是它，而 $\varepsilon$ 取**正有理数** —— 这样在造出 $\mathbb{R}$ 之前就说得通。

#### 定义引用：「Cauchy 列与零列」→ 实数系 ℝ　`dep.cauchy-null-real`

⭐ $\mathbb{R}$ 的元素就是「Cauchy 列模去零列」这些等价类 —— 构造直接踩在它上面。

#### 定义引用：「商集与等价类」→ 实数系 ℝ　`dep.quotient-real`

和 $\mathbb{Z}$、$\mathbb{Q}$ 是**同一招**：把已有对象按等价关系粘成等价类。整条链 $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ 用的都是这一个手法。

#### 定义引用：「商集与等价类」→ 可积 / L¹　`dep.quotient-integrable`

$L^1$ 的元素不是函数本身，而是**函数在 a.e. 相等下的等价类** —— 后面 $L^p$、RN 导数用的是同一个手法。

#### 定义引用：「有理数 ℚ」→ 阿基米德性质　`dep.rat-archimedean`

「$\mathbb{Q}$ 在 $K$ 中稠密」里的 $\mathbb{Q}$ 就是有理数集在 $K$ 中的嵌入像。

#### 定义引用：「可数与不可数」→ ℝ 不可数　`dep.countable-uncountable`

定理说的就是「$\mathbb{R}$ **不可数**」。

#### 定义引用：「基数 |A|」→ ℝ 不可数　`dep.cardinal-uncountable`

结论写成基数就是 $|\mathbb{R}| = 2^{\aleph_0} > \aleph_0$。

#### 定义引用：「Cantor 定理」→ ℝ 不可数　`dep.cantor-uncountable`

后半句 $2^{\aleph_0} > \aleph_0$ 用的就是 Cantor 定理（$|A| < |\mathcal{P}(A)|$）。

#### 绝对值 |x| ⟹ 三角不等式　`imp.triangle`
*绝对值的定义 $\implies$ 三角不等式*

设 $x, y \in K$。先看两个基本事实（都由 $|t| = \max\{t, -t\}$ 直接读出）：

- $t \le |t|$ 且 $-t \le |t|$，即 $-|t| \le t \le |t|$。

于是

$$x \le |x|, \qquad -x \le |x|, \qquad y \le |y|, \qquad -y \le |y|$$

两两相加（序与加法相容）：

$$x + y \le |x| + |y|, \qquad -(x + y) \le |x| + |y|$$

即 $-c \le x + y \le c$，其中 $c := |x| + |y| \ge 0$。而

$$-c \le t \le c \iff |t| \le c \qquad (c \ge 0)$$

（$\Longleftarrow$：由 $t \le c$ 与 $-t \le c$ 分别取 $\max$；$\implies$：$|t|$ 等于 $t$ 或 $-t$，两种情形都在 $c$ 以下。）取 $t = x + y$ 得

$$|x + y| \le |x| + |y| \qquad \blacksquare$$

**变形。** 在 $|x + y| \le |x| + |y|$ 中把 $x$ 换成 $x - y$ 得 $|x| \le |x - y| + |y|$，即 $|x| - |y| \le |x - y|$；交换 $x, y$ 得另一侧，两者合起来就是 $\big| |x| - |y| \big| \le |x - y|$。$n$ 元版本由归纳：$|x_1 + \cdots + x_n| \le |x_1 + \cdots + x_{n-1}| + |x_n|$。

#### 三角不等式 ⟹ Cauchy 列与零列　`imp.triangle-cauchy`
*三角不等式 $\implies$ 零列关系是等价关系*

自反、对称直接由定义读出；**传递**要三角不等式：若 $(x_n) \sim (y_n)$、$(y_n) \sim (z_n)$，则 $|x_n - z_n| \le |x_n - y_n| + |y_n - z_n|$，右边两项都是零列，故 $(x_n) \sim (z_n)$。没有这一条，$\mathbb{R}$ 就没法定义成商集。∎

#### 实数系 ℝ ⟹ ℝ 是完备有序域　`imp.real-ordered-field`
*Cauchy 列的等价类 $\implies$ 完备有序域*

记 $\mathcal{C}$ 为有理 Cauchy 列的全体。下面把 $\mathbb{R} := \mathcal{C}/\sim$ 逐条查一遍。

**① 运算良定义。** 设 $x \sim x'$、$y \sim y'$（即 $x_n - x'_n$、$y_n - y'_n$ 都是零列）。

加法：$|(x_n + y_n) - (x'_n + y'_n)| \le |x_n - x'_n| + |y_n - y'_n| \to 0$（三角不等式）。

乘法：$x_n y_n - x'_n y'_n = x_n (y_n - y'_n) + y'_n (x_n - x'_n)$，而 Cauchy 列**有界**（设 $|x_n| \le M$、$|y'_n| \le M'$），故两项各自 $\to 0$。

**② 域公理。** 结合、交换、分配都是逐项验证后取等价类（$\mathbb{Q}$ 满足，$\mathcal{C}$ 对 $+$、$\cdot$ 封闭）。零元 $0 := [$零列$]$、一 $1 := [(1,1,1,\ldots)]$。

**乘法逆元**是唯一需要想法的地方：设 $x$ 不是零列。因 $x$ 是 Cauchy 列，「不是零列」意味着

$$\exists \varepsilon > 0: \forall N, \exists n \ge N,\ |x_n| \ge \varepsilon$$

取这样的 $\varepsilon$，并用 Cauchy 性取 $N_0$ 使 $m, n \ge N_0$ 时 $|x_m - x_n| < \varepsilon/2$；再取 $n_0 \ge N_0$ 使 $|x_{n_0}| \ge \varepsilon$。则对一切 $n \ge N_0$：

$$|x_n| \ge |x_{n_0}| - |x_n - x_{n_0}| > \varepsilon - \varepsilon/2 = \varepsilon/2$$

于是定义 $y_n := 0$（$n < N_0$）、$y_n := 1/x_n$（$n \ge N_0$）。$y$ 是 Cauchy 列，因为

$$|y_m - y_n| = \frac{|x_m - x_n|}{|x_m|\,|x_n|} \le \frac{4}{\varepsilon^2}\,|x_m - x_n|$$

而 $[x_n y_n] = [(1,1,1,\ldots)] = 1$。故每个非零元可逆。

**③ 序良定义 + 全序。** $(y_n - x_n)$ 换成等价的代表元后仍是零列的平移，故「$> 0$」的定义与代表元无关。三种情形恰有一种成立：

- $x$ 是零列 $\implies [x] = 0$；
- 否！则由 ② 的估计，从某项起 $|x_n| \ge \delta$；再用 Cauchy 性（取 $\varepsilon = \delta$）知符号最终恒定：若某两项异号则 $|x_m - x_n| \ge 2\delta$，矛盾。于是要么最终 $x_n \ge \delta$（正），要么最终 $x_n \le -\delta$（负）。

序与运算的相容性（$\alpha \le \beta \implies \alpha + \gamma \le \beta + \gamma$；$\alpha \ge 0, \beta \ge 0 \implies \alpha\beta \ge 0$）都逐项验证。

**④ 嵌入与稠密。** $x \mapsto [(x,x,x,\ldots)]$ 是保序、保运算的单射。稠密：若 $\alpha < \beta$，取代表元 $x \in \alpha$、$y \in \beta$ 与正有理数 $q$ 使最终 $x_n + q \le y_n$，则由 $\mathbb{Q}$ 的稠密性可取有理数 $r$ 夹在中间，常数列 $r$ 满足 $\alpha < [r] < \beta$。

**⑤ $\mathbb{R}$ 完备（Cauchy 完备）。** 设 $(\alpha_k)$ 是 $\mathbb{R}$ 中的 Cauchy 列，$x^{(k)} \in \alpha_k$ 是代表元。对每个 $k$，由 $(x^{(k)}_n)_n$ 的 Cauchy 性取 $N_k$，令

$$y_k := x^{(k)}_{N_k}$$

（对角抽取。）断言 $(y_k)$ 是有理 Cauchy 列：给定 $\varepsilon > 0$，由 $(\alpha_k)$ 的 Cauchy 性取 $K$，使 $k, j \ge K$ 时 $|\alpha_k - \alpha_j| < \varepsilon/3$，即

$$\exists N, \forall n \ge N : |x^{(k)}_n - x^{(j)}_n| < \varepsilon/3$$

再取 $K' \ge K$ 使 $k \ge K'$ 时 $1/k < \varepsilon/3$，并对 $k, j \ge K'$ 取 $n \ge \max(N_k, N_j, N)$：

$$|y_k - y_j| \le |y_k - x^{(k)}_n| + |x^{(k)}_n - x^{(j)}_n| + |x^{(j)}_n - y_j| < \tfrac{\varepsilon}{3} + \tfrac{\varepsilon}{3} + \tfrac{\varepsilon}{3} = \varepsilon$$

于是 $\alpha := [y_k] \in \mathbb{R}$。同一组估计给出 $|\alpha_k - \alpha| \le 2\varepsilon/3$（取 $j$ 充分大），故 $\alpha_k \to \alpha$。**每个 Cauchy 列在 $\mathbb{R}$ 中收敛。**

**⑥ 由 Cauchy 完备推出确界原理。** 设 $S \subseteq \mathbb{R}$ 非空、有上界 $\beta_0$，取 $\alpha_0 \in S$。归纳地造两个数列：已知 $\alpha_{n-1} \in S$ 与上界 $\beta_{n-1}$，取中点 $m_n := (\alpha_{n-1} + \beta_{n-1})/2$：

- 若 $m_n$ 是 $S$ 的上界，则置 $\beta_n := m_n$、$\alpha_n := \alpha_{n-1}$；
- 否则有 $s \in S$ 使 $s > m_n$，置 $\alpha_n := s$、$\beta_n := \beta_{n-1}$。

于是 $(\alpha_n)$ 递增、$(\beta_n)$ 递减，且

$$\beta_n - \alpha_n = \frac{\beta_0 - \alpha_0}{2^n} \xrightarrow{\ n \to \infty\ } 0$$

两个列都是 Cauchy 列（单调 + 步长趋于 $0$），由 ⑤ 收敛到同一个 $\alpha \in \mathbb{R}$。

**$\alpha$ 是上界**：若不然，存在 $s \in S$ 使 $s > \alpha$。取 $n$ 充分大使 $\beta_n - \alpha_n < s - \alpha$；由 $\alpha_n \to \alpha$ 又有 $\alpha \le \beta_n$ 与 $\alpha_n \le \alpha$，于是 $\alpha_n + (s - \alpha) > \beta_n$，而 $\alpha_n \in S$ 且 $s \in S$ 都是 $\beta_n$ 下面的元素 —— 与「$\beta_n$ 是上界」矛盾。

**$\alpha$ 是最小上界**：任何上界 $\gamma$ 都满足 $\gamma \ge \alpha_n$（$\alpha_n \in S$），取极限得 $\gamma \ge \alpha$。

故 $\alpha = \sup S$ 存在，确界原理成立。$\blacksquare$

> ⭐ 注意 ⑤ 与 ⑥ 的位置：**先有「Cauchy 列收敛」，才有确界原理**。戴德金分割那条路的顺序正好相反（那里完备性是「并」的直接后果），两条路殊途同归。

#### ℝ 是完备有序域 ⟹ 阿基米德性质　`imp.archimedean`
*完备性 $\implies$ 阿基米德性质 + $\mathbb{Q}$ 稠密*

设 $K$ 是完备有序域（把 $\mathbb{N}$、$\mathbb{Z}$、$\mathbb{Q}$ 按 $1$ 生成的子域嵌进去看）。

**(i) 自然数无上界。** 反设 $\mathbb{N}$ 在 $K$ 中有上界。由**完备性**，$s := \sup \mathbb{N}$ 存在。$s - 1 < s$，故 $s - 1$ 不是上界，于是存在 $n \in \mathbb{N}$ 使 $n > s - 1$。但那样 $n + 1 > s$，而 $n + 1 \in \mathbb{N}$ —— 与 $s$ 是上界矛盾。故

$$\forall x \in K, \exists n \in \mathbb{N}: n > x$$

（顺带一句：若 $x > 0$，把 $n$ 换成 $n + 1$ 还能保证 $n \ge 1$、$1/n < x$。）

**(ii) $\mathbb{Q}$ 稠密。** 设 $x < y$，则 $y - x > 0$。由 (i)（取 $x$ 换成 $1/(y-x)$ 的用法）可取 $n \in \mathbb{N}$，$n \ge 1$，使

$$n (y - x) > 1, \qquad \text{即}\quad \frac{1}{n} < y - x$$

再对实数 $nx$ 用一次 (i) 的整数版本：存在 $m \in \mathbb{Z}$ 使

$$m \le nx < m + 1$$

（「整数版本」：先用 (i) 取 $k > nx$，再从 $\{0, 1, \ldots, k\}$ 中取最小的使 $\ge nx$ 的那个。）令 $q := (m+1)/n \in \mathbb{Q}$。则

- $q > x$：由 $nx < m + 1$ 两边除以 $n > 0$；
- $q < y$：由 $q = \frac{m+1}{n} \le \frac{nx + 1}{n} = x + \frac{1}{n} < x + (y - x) = y$。

故 $x < q < y$，$\mathbb{Q}$ 在 $K$ 中稠密。$\blacksquare$

> ⭐ 注意 (i) 的证明只用了「$\mathbb{N}$ 的每个元都有后继」与「上确界存在」这两件事 —— 这就是为什么**完备性蕴含阿基米德性**。

#### 阿基米德性质 + 实数系 ℝ ⟹ 完备有序域的唯一性　`imp.real-unique`
*$\mathbb{Q}$ 稠密 $\implies$ 完备有序域与 $\mathbb{R}$ 同构*

设 $K$ 是完备有序域，取 $K' := \mathbb{R}$（上面构造出来的那个）。分三步造出唯一的同构 $f : K \to \mathbb{R}$。

**① $\mathbb{Q}$ 的部分被唯一确定。** 任何保 $1$ 的域同态都把 $\mathbb{Z}$ 送到 $\mathbb{Z}'$：$n \mapsto n'$（加法与乘法都由 $1$ 递推地定出来），再取分式得 $\mathbb{Q} \to \mathbb{Q}'$，记作 $q \mapsto q'$。它保序（$q < r \implies r - q > 0 \implies (r-q)' > 0 \implies q' < r'$）。这一步没有选择的余地。

**② 用上确界把 $f$ 推广出去。** 对 $x \in K$ 定义

$$f(x) := \sup\{\, q' : q \in \mathbb{Q},\ q < x \,\} \in K'$$

这个上确界存在：集合非空（(i) 阿基米德性给出一个 $q < x$）且有上界（取 $r > x$，则所有 $q < x < r$ 满足 $q' < r'$）。于是 $f$ 是**保序**的：

- $x \le y \implies f(x) \le f(y)$：$\{q : q<x\} \subseteq \{q : q<y\}$；
- $x < y \implies f(x) < f(y)$：由 $\mathbb{Q}$ 稠密取 $q, r$ 使 $x < q < r < y$，则 $f(x) \le q' < r' \le f(y)$。

**保运算**：以加法为例，若 $p < x$、$q < y$，则 $p + q < x + y$，故 $f(x) + f(y) \le f(x+y)$；反向用稠密性：任取 $s < x + y$，取有理数 $u < x$ 使 $s - u < y$，则 $s < u + (s - u) < x + y$ 且 $s' \le f(x) + f(y)$，对一切 $s < x+y$ 取上确界得 $f(x+y) \le f(x) + f(y)$。两边相等。乘法同理（先把正元夹在有理数之间，再用符号规则）。

**满射**：给定 $y' \in K'$，令 $x := \sup\{q \in \mathbb{Q} : q' < y'\}$（同样由阿基米德性与完备性存在）。任取有理数 $p < x < r$，则 $p' \le y' \le r'$；由 $\mathbb{Q}$ 稠密取 $p \nearrow x$、$r \searrow x$ 代入，得 $f(x) = y'$。

**③ 唯一性。** 设 $g : K \to K'$ 也是这样的同构。由 ① 的「没有选择余地」，$g$ 与 $f$ 在 $\mathbb{Q}$ 上一致。任取 $x \in K$，由 $\mathbb{Q}$ 在 $K$ 中**稠密**，$x = \sup\{ q \in \mathbb{Q} : q < x \}$；又 $g$ 保序且把上确界送到上确界（保序双射 + 稠密性），故

$$g(x) = g\big(\sup\{q : q < x\}\big) = \sup\{g(q) : q < x\} = \sup\{q' : q < x\} = f(x)$$

所以 $f = g$：**同构存在且唯一**。$\blacksquare$

> ⭐ 三步里每一步都在用前面的准备：① 只用到「$1$ 生成 $\mathbb{Q}$」；② 才真正用**完备性**（两次取上确界）；③ 用的是**$\mathbb{Q}$ 稠密**。少任何一条，唯一性就不成立。

#### ℝ 是完备有序域 ⟹ ℝ 不可数　`imp.real-uncountable`
*完备性（确界原理）$\implies \mathbb{R}$ 不可数（闭区间套 + 对角线）*

反设 $\mathbb{R} = \{x_1, x_2, x_3, \ldots\}$ 可以排成一个序列。下面造一个不属于这个序列的实数。

**① 二分法造出一串闭区间。** 取 $I_0 := [0, 1]$。已知 $I_{n-1} = [a_{n-1}, b_{n-1}]$ 后，令 $m_n := (a_{n-1} + b_{n-1})/2$，取

$$I_n := \begin{cases} [a_{n-1}, m_n], & x_n > m_n \\ [m_n, b_{n-1}], & x_n \le m_n \end{cases}$$

于是 $x_n \notin I_n$，且 $I_0 \supseteq I_1 \supseteq I_2 \supseteq \cdots$，长度 $b_n - a_n = 2^{-n} \to 0$。

**② 完备性给出公共点。** 令 $A := \{a_n\}$。$A$ 非空（$a_0 = 0$）且有上界（$1$ 就是上界），故由**确界原理** $a := \sup A$ 存在。

**$a \in I_n$ 对每个 $n$ 成立**：一方面 $a \ge a_n$（上界）；另一方面对 $k \ge n$ 有 $a_k \le b_k \le b_n$，故 $b_n$ 是 $A$ 的上界，于是 $a \le b_n$。

**③ 矛盾。** 由 ① 知 $x_n \notin I_n$，由 ② 知 $a \in I_n$，所以 $a \ne x_n$ 对**一切** $n$ 成立 —— 但 $a \in \mathbb{R} = \{x_1, x_2, \ldots\}$，与序列穷尽了 $\mathbb{R}$ 矛盾。故 $\mathbb{R}$ 不可数。$\blacksquare$

**④ 基数版本。** 把实数写成二进制小数（约定不用最后全 1 的写法以避开歧义）得到 $\mathbb{R} \hookrightarrow \mathcal{P}(\mathbb{N})$；反过来 $\mathcal{P}(\mathbb{N}) \to \mathbb{R}$ 用三进制展开即可，两边都有单射，由 Schröder–Bernstein 得 $|\mathbb{R}| = |\mathcal{P}(\mathbb{N})| = 2^{\aleph_0}$。再由 **Cantor 定理** $|\mathcal{P}(\mathbb{N})| > |\mathbb{N}| = \aleph_0$，即

$$|\mathbb{R}| = 2^{\aleph_0} > \aleph_0$$

#### 定义引用：「函数」→ 域　`dep.function-field`

两个运算就是两个**函数** $F \times F \to F$（定义域那一步先要用「笛卡尔积」把 $F \times F$ 造出来）。

#### 定义引用：「域」→ 有序域　`dep.field-ordered`

有序域 = **域** + 一条与运算相容的全序：先有域，再加上序。

#### 定义引用：「偏序集」→ 有序域　`dep.poset-ordered`

定义里的 $\le$ 是**全序** —— 偏序再加上可比性。

#### 定义引用：「域」→ 向量空间的基　`dep.field-vs`

「设 $K$ 是域，$V$ 是 $K$ 上的向量空间」—— 向量空间的**系数**取自一个域。（取 $K = \mathbb{R}$ 就是最常用的实向量空间。）

#### 定义引用：「偏序集」→ 序同构　`dep.poset-order-iso`

序同构是**偏序集**之间的映射：先有偏序，才谈得上保序。

#### 定义引用：「良序集」→ 序数　`dep.wellorder-ordinal`

序数的第二条要求是「$\in$ 在 $\alpha$ 上是**良序**」—— 先有良序集这个概念，才能说传递集上的 $\in$ 是不是良序。

#### 定义引用：「良序集」→ 超限递归　`def-link.wellorder-recursion`

递归定理的舞台是**良序集**：每一步之前的部分必须是有头有尾的，递归才停得下来。

#### 定义引用：「序数」→ Hartogs 定理　`def-link.ordinal-hartogs`

Hartogs 定理陈述里的「不能单射进 $X$ 的序数」直接用到序数。

#### 定义引用：「序数」→ 基数可比定理　`def-link.ordinal-cardinal-comparable`

基数可比定理的证明路线是「先良序化 $\to$ 换成序数 $\to$ 序数一定可比」，落点正是序数。

#### 定义引用：「序数」→ 基数 |A|　`def-link.ordinal-cardinal`

严格说来「等势类」是真类，通行做法是取每个等势类里最小的**序数**作代表 —— 那个序数才叫基数。（本图的 $|A|$ 只用到单射/双射，所以这条依赖是概念上的，不是定义上的。）

#### 定义引用：「超限递归」→ 良序定理　`def-link.recursion-wellordering`

证明良序定理时用超限递归沿良序一步步往下取元素。

#### 良序集 ⟹ 超限递归　`imp.recursion-wellorder`
*良序性 $\implies$ 递归定理*

设 $(W, \preceq )$ 是良序集，$G$ 任给。记 $W_{< w} = \{ v \in W : v \prec w \}$。

**① 初始段上的解至多一个。** 设 $w \in W$，$f, g$ 都是 $W_{< w}$ 上满足递归式的函数。反设 $f \ne g$，取最小的 $v \prec w$ 使 $f(v) \ne g(v)$（这一步用的是**良序性**：$\{ u \prec w : f(u) \ne g(u) \}$ 非空故有最小元）。于是在 $W_{< v}$ 上 $f$ 与 $g$ 相同，从而

$$f(v) = G\big( f \upharpoonright W_{< v} \big) = G\big( g \upharpoonright W_{< v} \big) = g(v)$$

矛盾。故 $W_{< w}$ 上至多一个解，且这个解唯一确定。

**② 构造候选关系的集合。** 令

$$R = \{ (w, y) : \text{存在函数} f \text{ 定义在} W_{< w} \text{ 上、满足递归式，且} y = G(f) \}$$

它是集合：候选的 $f$ 都是 $W_{< w} \times V$ 的子集，先由幂集公理拿到 $\mathcal{P}(W \times V)$，再用分离公理模式从里面筛出满足条件的那些（$V$ 取一个足够大的集合即可，例如 $G$ 的值域之并的幂集的幂集）。由 ①，对每个 $w$ 至多一个 $y$，所以 $R$ **是单值的**，即 $R$ 是一个函数。

**③ $R$ 的定义域是整个 $W$。** 反设不然，取最小的 $w \notin \operatorname{dom}\, R$。则 $W_{< w} \subseteq \operatorname{dom}\, R$，于是 $f := R \upharpoonright W_{< w}$ 是 $W_{< w}$ 上满足递归式的函数（若 $v \prec w$，由 $v \in \operatorname{dom}\, R$ 及单值性得 $f(v) = G(f \upharpoonright W_{< v})$）。于是 $(w, G(f)) \in R$，与 $w \notin \operatorname{dom}\, R$ 矛盾。

故 $R$ 就是所求的函数 $F$，由 ① 唯一。

**④ 超限归纳。** 设 $W \setminus S$ 非空，取它的最小元 $w$。则 $W_{< w} \subseteq S$，由假设 $w \in S$，矛盾。故 $S = W$。∎

> ① 是唯一性、②③ 是存在性。整个证明里**只用**了良序性、幂集公理和分离公理模式 —— 没有用到选择公理。这是它能在 ZF 里安全使用的原因。

#### 序数 + 正则公理 ⟹ 序数可比　`imp.ordinal-trichotomy`
*序数的定义 $\implies$ 三歧性*

设 $\alpha, \beta$ 是序数。

**① 序数的元素是序数。** 若 $\gamma \in \alpha$：$\gamma \subseteq \alpha$（$\alpha$ 传递），故 $\gamma$ 传递（$\gamma$ 的元素属于 $\alpha$，而 $\alpha$ 传递）；又 $\in$ 在 $\gamma$ 上继承 $\alpha$ 上的良序性，故 $\gamma$ 是序数。

**② 若 $\beta \subset \alpha$ 则 $\beta \in \alpha$。** 取 $b$ 为 $\alpha \setminus \beta$ 的 $\in$-最小元。断言 $\beta = b$。
　$\subseteq$：设 $x \in \beta$。由 $\beta \subseteq \alpha$ 有 $x \in \alpha$，故 $x, b \in \alpha$；由 $\in$ 在 $\alpha$ 上的**三歧性**（良序蕴含全序），$x \in b$、$x = b$、$b \in x$ 恰有一个成立。后两种都会给出 $b \in \beta$（$x = b$ 直接，$b \in x$ 用 $\beta$ 传递），与 $b$ 的取法矛盾。故 $x \in b$。
　$\supseteq$：设 $x \in b$。由 $\alpha$ 传递得 $x \in \alpha$。若 $x \in \alpha \setminus \beta$，则 $x \in b$ 与 $b$ 的最小性矛盾（$x \in b$ 即 $x$ 比 $b$ 小）。故 $x \in \beta$。
　于是 $\beta = b$，而 $b \in \alpha$，即 $\beta \in \alpha$。

**③ 三歧性。** 若 $\alpha \ne \beta$，则 $\alpha \subseteq \beta$ 与 $\beta \subseteq \alpha$ 不能同时成立。不妨设 $\beta \nsubseteq \alpha$，则 $\beta \setminus \alpha \ne \emptyset$，故 $\beta \subset \alpha$ 不成立，由 ② 得 $\alpha \in \beta$。对调 $\alpha, \beta$ 同理。

**④ 三者不相容。** 若 $\alpha \in \beta$ 且 $\beta \in \alpha$，则由传递性 $\alpha \in \alpha$，与 $\in$ 在 $\alpha$ 上是良序（无 $\in$-循环）矛盾。又 $\alpha \in \beta$ 与 $\alpha = \beta$ 显然不相容。

**⑤ $\in$ 是良序。** 可比性已得；非空序数集合 $S$ 取 $\alpha \in S$，若 $\alpha$ 不是 $\in$-最小元，则 $\alpha \cap S$ 是集合，由正则公理有 $\in$-最小元 $m$，而 $m$ 也是 $S$ 的 $\in$-最小元。∎

> ② 是全部关键：「序数之间 $\subset$ 就是 $\in$」。它让序数的比较退化成集合的属于关系。

#### 超限递归 + 替换公理模式 + 正则公理 + 序数可比 ⟹ 良序集的序型　`imp.wellorder-ordinal`
*递归定理 + 替换公理 $\implies$ 每个良序集有唯一序型*

设 $(W, \preceq )$ 是良序集。

**① 造出函数。** 由**递归定理**（取 $G(f) = \operatorname{ran}\, f$，即「前面全部取值的值域」）得到唯一的 $F$ 定义在 $W$ 上，使

$$F(w) = \{ F(v) : v \prec w \}, \qquad \forall w \in W$$

每个 $F(w)$ 都是集合 —— 由**替换公理模式**，$\{ F(v) : v \prec w \}$ 是某个集合的像。

**② $F$ 保序。** 若 $v \prec w$，则 $F(v) \in \{ F(u) : u \prec w \} = F(w)$。反过来若 $F(v) \in F(w)$，则 $F(v) = F(u)$ 对某个 $u \prec w$；再由 ③ 的单射性得 $v = u \prec w$。

**③ $F$ 是单射。** 反设存在 $v \ne w$ 使 $F(v) = F(w)$；由于 $\preceq$ 是全序，不妨 $v \prec w$。由 ② 得 $F(v) \in F(w) = F(v)$，即 $F(v) \in F(v)$ —— 与「任何集合都不属于自身」（正则公理的推论）矛盾。（这一步是真正用到**正则公理**的地方。）

**④ $\alpha := \operatorname{ran}\, F$ 是序数。** 由替换公理模式，$\alpha = \{ F(w) : w \in W \}$ 是集合。**传递性**：若 $x \in F(w)$，则 $x = F(v)$ 对某个 $v \prec w$，故 $x \in \alpha$。**$\in$ 良序**：$\alpha$ 上的 $\in$ 经 ②③ 就是 $(W, \prec)$ 的序（$x \in y \iff F^{-1}(x) \prec F^{-1}(y)$），良序性原样搬过来。

**⑤ 于是 $F$ 是 $(W, \preceq ) \to (\alpha, \in)$ 的序同构**，故 $W$ 的序型 $\alpha$ 存在。

**⑥ 唯一性。** 设 $\alpha, \beta$ 都是 $W$ 的序型，则 $(\alpha, \in) \cong (\beta, \in)$。由**三歧性**，$\alpha \in \beta$、$\alpha = \beta$、$\beta \in \alpha$ 恰有一个成立。若 $\alpha \in \beta$：由 $\beta$ 传递得 $\alpha \subseteq \beta$，且 $\alpha = \{ x \in \beta : x \in \alpha \}$ 是 $\beta$ 的**真**初始段。把两个序同构接起来，得到 $(\alpha, \in)$ 与自己的真初始段序同构 —— 而**良序集不能与自己的真初始段序同构**（见下），矛盾。故 $\alpha \notin \beta$；交换 $\alpha, \beta$ 同理得 $\beta \notin \alpha$。于是只能 $\alpha = \beta$。

**引理**（上一步用到）：良序集 $(L, \prec)$ 不可能与它的真初始段 $L_{< a} = \{ x \in L : x \prec a \}$ 序同构。
证：设 $h : L \to L_{< a}$ 是序同构。对 $x \prec a$ 用**超限归纳**：若 $\forall y \prec x,\ h(y) = y$，则 $h(x)$ 是 $L_{< a}$ 中大于一切 $h(y) = y\ (y \prec x)$ 的最小元，也就是「大于一切 $y \prec x$ 的最小元」，即 $h(x) = x$（序同构把「小于 $x$ 的全部元素」映成「小于 $h(x)$ 的全部元素」）。故 $h$ 在 $L_{< a}$ 上恒等；于是 $h(a)$ 是 $L_{< a}$ 中大于一切 $y \prec a$ 的最小元，即 $h(a) = a$ —— 但 $h(a) \in L_{< a}$ 意为 $h(a) \prec a$，矛盾。∎

> 整个证明只用 **ZF**（递归定理 + 替换公理 + 三歧性），不要选择公理。这正是 Hartogs 定理能在 ZF 里成立的原因之一。

#### 序数 + 序数可比 ⟹ 序数全体是真类　`imp.burali-forti`
*序数的定义 + 三歧性 $\implies$ 序数全体是真类*

反设 $\mathrm{On}$ 是一个集合。

**① $\mathrm{On}$ 传递。** 若 $x \in \mathrm{On}$，则 $x$ 是序数，而序数的元素还是序数（见三歧性的证明 ①），故 $x \subseteq \mathrm{On}$。

**② $\in$ 在 $\mathrm{On}$ 上良序。** 可比性来自三歧性；$\mathrm{On}$ 的非空子集 $S$ 取 $\alpha \in S$，若 $\alpha$ 不是 $\in$-最小元，则由正则公理 $\alpha \cap S$ 有 $\in$-最小元，它也是 $S$ 的 $\in$-最小元。

**③ 于是 $\mathrm{On}$ 是序数。** ①② 正是序数定义的两条。

**④ 矛盾。** $\mathrm{On}$ 是序数故 $\mathrm{On} \in \mathrm{On}$，与 $\in$ 在 $\mathrm{On}$ 上良序（无 $\in$-循环）矛盾。∎

> 「序数全体」是**真类**而不是集合 —— 所以分离公理模式不能用在它身上。这正是 ZFC 处理 Russell 悖论、Burali–Forti 悖论的统一办法。

#### 定义引用：「一阶语言」→ 公式　`dep.lang-formula`

公式是**某个语言**的公式：先有符号表，才有那三条语法规则。

#### 定义引用：「公式」→ 代入　`dep.formula-substitution`

代入是作用在**公式**上的操作（只换自由出现）。

#### 定义引用：「一阶语言」→ 满足关系　`dep.lang-satisfaction`

满足关系必须相对**一门语言**（决定有哪些符号）和一个结构来说。

#### 定义引用：「公式」→ 满足关系　`dep.formula-satisfaction`

$\models$ 按**公式的复杂度**递归定义 —— 没有「公式由语法规则生成」这件事，这个递归就没有落脚点。

#### 定义引用：「公式」→ 分离公理模式　`def-link.formula-sep`

分离公理模式写的是「对**每个公式** $\varphi (x, p)$（其中 $B$ 不出现），下面是一条公理」—— 它是公理**模式**而不是单条公理，正在于它要对每个公式都发一条。

#### 定义引用：「公式」→ 替换公理模式　`def-link.formula-repl`

替换公理模式同样是「对每个公式一条公理」。

#### 定义引用：「代入」→ 替换公理模式　`def-link.substitution-repl`

替换公理模式把 $A$ 中每个 $x$ 在公式 $\varphi (x, y, p)$ 下的像收集起来 —— 这一步做的就是**代入**。

#### 定义引用：「子集」→ 分离公理模式　`def-link.sep-subset`

分离公理模式给出的 $B = \{ x \in A : \varphi (x, p) \}$ 恰好是 $A$ 的一个**子集**——"只从 $A$ 里挑元素"正是 $\subseteq$ 的语义。

#### 定义引用：「子集」→ 幂集公理　`def-link.power-subset`

幂集公理的陈述里直接出现了子集符号：$x \in \mathcal{P}(A) \iff x \subseteq A$。

#### 定义引用：「子集」→ 有限特征　`def-link.finchar-subset`

「$X$ 的每个**有限子集**都属于 $\mathcal{A}$」——有限特征是靠子集概念说出来的。

#### 定义引用：「配对公理」→ 有序对　`def-link.pair-pairing`

有序对 $(a, b) = \{\{a\}, \{a, b\}\}$ 的**构造**要用到**配对公理**，它才成为集合。

#### 定义引用：「幂集公理」→ 有序对　`def-link.pair-power`

同一个构造也要用到**幂集公理**：$\{a, b\}$ 的幂集里才装得下 $\{\{a\}, \{a, b\}\}$。

#### 定义引用：「有序对」→ 关系　`def-link.rel-pair`

关系被定义为「有序对的集合」，函数是特殊的关系，因此整个定义都建立在有序对之上。

#### 定义引用：「有序对」→ 笛卡尔积存在　`def-link.product-pair`

$A \times B = \{ (a, b) : a \in A, b \in B \}$ 中的元素就是有序对。

#### 定义引用：「函数」→ 选择函数　`def-link.choicefn-rel`

选择函数首先是一个**函数**：定义里直接要求「$f$ 是函数，$\operatorname{dom} f = F$」。

#### 定义引用：「选择函数」→ 选择公理　`def-link.ac-choicefn`

选择公理的陈述直接使用了「选择函数」这个词：每个 $\emptyset \notin F$ 的集合族都有选择函数。

#### 定义引用：「偏序集」→ 链　`def-link.chain-poset`

链是偏序集的子集：定义里用到了偏序 $\preceq$ 与可比性。

#### 定义引用：「偏序集」→ 界与确界　`def-link.bound-poset`

上界、极大元、最大元都是相对于一个偏序集 $(P, \preceq )$ 而言的。

#### 定义引用：「偏序集」→ 良序集　`def-link.wellorder-poset`

良序集首先是全序集（从而也是偏序集），只是在它上面加了「非空子集有最小元」。

#### 定义引用：「偏序集」→ 有限特征　`def-link.finchar-poset`

有限特征的最典型例子就是「偏序集的链族」，定义条目里举了这个例子。

#### 定义引用：「链」→ 有限特征　`def-link.finchar-chain`

「$X$ 是链 $\iff X$ 的每个有限子集是链」——这是链族具有有限特征的原因，也是 $Tukey \implies Hausdorff$ 的全部关键。

#### 定义引用：「偏序集」→ 佐恩引理　`def-link.zorn-poset`

佐恩引理是**关于偏序集**的命题：前提与结论都离不开 $\preceq$ 与上界。

#### 定义引用：「链」→ 佐恩引理　`def-link.zorn-chain`

「$P$ 的每个链都有上界」是佐恩引理的核心条件。

#### 定义引用：「界与确界」→ 佐恩引理　`def-link.zorn-bound`

条件用的是「上界」，结论用的是「极大元」——特别要注意不是「最大元」。

#### 定义引用：「偏序集」→ Hausdorff 极大原理　`def-link.hausdorff-poset`

Hausdorff 极大原理陈述在偏序集 $(P, \preceq )$ 上。

#### 定义引用：「链」→ Hausdorff 极大原理　`def-link.hausdorff-chain`

整条原理就是在说「链可以长到极大」。

#### 定义引用：「有限特征」→ Tukey 引理　`def-link.tukey-finchar`

Tukey 引理的唯一前提就是「该集合族具有有限特征」。

#### 定义引用：「良序集」→ 良序定理　`def-link.wo-wellorder`

良序定理断言「每个集合都能被良序化」，用到的正是良序集这个概念。

#### 定义引用：「向量空间的基」→ 每个向量空间有基　`def-link.basis-vs`

「每个向量空间有基」中的「基」由线性无关与生成两个概念定义。

#### 定义引用：「外延公理」→ 子集　`def-link.ext-subset`

子集最常用的那条性质——$A = B \iff A \subseteq B \wedge B \subseteq A$（**两边互包**）——正是**外延公理**的直接推论。

#### 定义引用：「外延公理」→ 空集存在　`def-link.ext-empty`

空集的存在由分离公理模式给出，但「这样的集合**至多一个**」靠的是**外延公理**——所以 $\emptyset$ 这个记号才有意义。

#### 定义引用：「良序集」→ Hartogs 定理　`def-link.wellorder-hartogs`

Hartogs 数取的是「最小的那种**序数**」，而序数就是传递的良序集。

#### 定义引用：「预测度」→ F 给出的预测度　`def-link.premeasure-ls-premeasure`

命题的结论就是「$\mu_0$ 是 $\mathfrak{A}$ 上的一个**预测度**」。

#### 定义引用：「基本类」→ F 给出的预测度　`def-link.fundamental-class-ls-premeasure`

半开区间族 $\{ (a, b] : a < b \}$ 正是一个**基本类**；取它的有限不交并就得到 $\mathfrak{A}$。

#### 定义引用：「简单函数的积分」→ 简单函数积分的性质　`def-link.integral-simple-props`

四条性质都是关于**简单函数的积分** $\int \varphi \, d\mu$ 的。

#### 定义引用：「简单函数」→ 简单函数积分的性质　`def-link.simple-function-props`

命题谈的对象就是两个简单函数 $\varphi$、$\psi$。

#### 定义引用：「L⁺」→ Fatou 的推论　`def-link.lplus-fatou-cor`

$\{f_n\} \subseteq L^+$、$f \in L^+$：整条推论都活在**非负可测函数**里。

#### 定义引用：「L⁺」→ 积分有限的后果　`def-link.lplus-finite-integral`

前提是 $f \in L^+$ 且 $\int f < \infty$。

#### 定义引用：「零集与完备」→ 积分有限的后果　`def-link.null-set-finite-integral`

结论第一条说的是「$\{x : f(x) = \infty\}$ 是**零集**」。

#### 定义引用：「有限 / σ-有限 / 半有限」→ 积分有限的后果　`def-link.measure-space-finite-integral`

结论第二条用的是 **$\sigma$ 有限**这个概念。

#### 定义引用：「可积 / L¹」→ 积分绝对值不等式　`def-link.integrable-integral-abs`

前提 $f \in L^1(\mu)$ 就是**可积**。

#### 定义引用：「复函数的积分」→ 积分绝对值不等式　`def-link.integral-complex-abs`

$\int f \, d\mu$ 这个记号走的是**复值函数的积分**。

#### 定义引用：「可积 / L¹」→ L¹ 函数的支撑 σ-有限　`def-link.integrable-L1-support`

前提就是 $f \in L^1(\mu)$。

#### 定义引用：「有限 / σ-有限 / 半有限」→ L¹ 函数的支撑 σ-有限　`def-link.measure-space-L1-support`

结论说的是 $\{x : f(x) \ne 0\}$ **$\sigma$ 有限**。

#### 定义引用：「正集 / 负集 / 零集」→ 正集的封闭性　`def-link.posneg-positive-closure`

「正集」就是这一条定义的三种集合之一。

#### 定义引用：「可积 / L¹」→ 积分的绝对连续性　`def-link.integrable-ac-integral`

前提 $f \in L^1(\mu)$；积分 $\int_E f$ 要可积才有意义。

#### 定义引用：「绝对连续」→ 积分的绝对连续性　`def-link.ac-integral-continuity`

这条就是「积分关于测度**绝对连续**」的 $\varepsilon$–$\delta$ 形式。

#### 定义引用：「RN 导数与 Lebesgue 分解」→ 互为绝对连续时导数互逆　`def-link.rn-derivative-inverse`

两边的 $d\mu/d\lambda$ 与 $d\lambda/d\mu$ 都是 **RN 导数**。

#### 定义引用：「绝对连续」→ 互为绝对连续时导数互逆　`def-link.ac-rn-inverse`

前提是 $\mu \ll \lambda$ 且 $\lambda \ll \mu$——**互为绝对连续**。

#### 定义引用：「距离空间」→ 覆盖引理　`def-link.metric-covering`

引理里挑的就是一族**开球** $B_j$——开球是距离空间里的东西。

#### 定义引用：「测度」→ 覆盖引理　`def-link.measure-covering`

$m(U)$、$\sum m(B_j)$ 里的 $m$ 是**测度**（Lebesgue 测度）。

#### 定义引用：「平均算子 Aᵣ」→ 平均算子联合连续　`def-link.average-operator-continuous`

引理说的就是**平均算子** $A_r f(x)$ 关于 $(r, x)$ 的连续性。

#### 定义引用：「局部可积」→ 平均算子联合连续　`def-link.locally-integrable-average-continuous`

前提 $f \in L^1_{loc}$——平均算子只对**局部可积**函数定义。

#### 定义引用：「非负函数的积分」→ 递增函数的导数积分不等式　`def-link.integral-nonneg-monotone-derivative`

$\int_a^b F'$ 里 $F$ 递增所以 $F' \ge 0$，走的是**非负函数的积分**。

#### 定义引用：「NBV」→ NBV 函数的导数与测度的关系　`def-link.nbv-derivative`

前提就是 $F \in NBV$。

#### 定义引用：「相互奇异」→ NBV 函数的导数与测度的关系　`def-link.mutually-singular-nbv-derivative`

结论第一条 $\mu_F \perp m$ 用的是**相互奇异**。

#### 定义引用：「绝对连续」→ NBV 函数的导数与测度的关系　`def-link.ac-nbv-derivative`

结论第二条 $\mu_F \ll m$ 用的是**绝对连续**。

#### 定义引用：「RN 导数与 Lebesgue 分解」→ NBV 函数的导数与测度的关系　`def-link.rn-derivative-nbv-derivative`

$F(x) = \int_{-\infty}^{x} F'$ 等于说 $F' $ 就是那个 **RN 导数** $d\mu_F/dm$。

#### 定义引用：「绝对连续函数」→ AC ⊆ BV　`def-link.ac-function-subset-bv`

等式的左边就是**绝对连续函数**全体 $AC([a, b])$。

#### 定义引用：「有界变差 BV」→ AC ⊆ BV　`def-link.bv-subset-bv`

等式的右边是**有界变差**函数全体 $BV([a, b])$。

#### 定义引用：「共轭指数」→ Young 不等式　`def-link.conjugate-young`

把 $\lambda$ 取成 $1/p$，则 $\lambda$ 与 $1 - \lambda$ 正是一对**共轭指数**——Young 不等式是 Hölder 的算术底座。

#### 定义引用：「简单函数」→ 紧支简单函数稠密　`def-link.simple-function-dense`

被证明稠密的那一族就是**简单函数**（再要求紧支集）。

#### 定义引用：「L^p 范数」→ 紧支简单函数稠密　`def-link.lp-norm-dense`

「稠密」是在 $L^p$ 里说的，要用 $\|\cdot\|_p$。

#### 定义引用：「L^p 范数」→ L^q 落在 L^p + L^r 里　`def-link.lp-norm-lq-sum`

$L^q \subseteq L^p + L^r$ 里的三个空间都是 $L^p$ 型的。

#### 定义引用：「L^p 范数」→ L^p ∩ L^r ⊆ L^q　`def-link.lp-norm-interpolation`

插值不等式 $\|f\|_q \le \|f\|_p^{\lambda} \|f\|_r^{1-\lambda}$ 全是 $\|\cdot\|_p$ 型的量。

#### 定义引用：「本性上界与 L^∞」→ L^p ∩ L^r ⊆ L^q　`def-link.essential-sup-interpolation`

$r = \infty$ 那一端要把 $\|\cdot\|_r$ 读成**本性上界**。

#### 定义引用：「L^p 范数」→ ℓ^p ⊆ ℓ^q　`def-link.lp-norm-ell-p`

$\ell^p$ 就是计数测度下的 $L^p$，范数还是 $\|\cdot\|_p$。

#### 定义引用：「L^p 范数」→ 有限测度时方向反过来　`def-link.lp-norm-finite`

结论 $L^q(\mu) \subseteq L^p(\mu)$ 里的两个空间都是 $L^p$ 型的。

#### 定义引用：「有限 / σ-有限 / 半有限」→ 有限测度时方向反过来　`def-link.measure-space-lp-finite`

前提 $\mu(X) < \infty$ 用的是**有限测度**这个概念。

#### 定义引用：「界与确界」→ ℝ 是完备有序域　`def-link.sup-real-ordered-field`

**(iii) 完备性（确界原理）**说的正是「每个非空有上界的子集都有**上确界**」—— 结论是用 $\sup$ 写出来的。

#### 定义引用：「幂集公理」→ 幂集 𝒫(X)　`def-link.power-powerset`

**幂集公理**才是「$\mathcal{P}(X)$ 是一个集合」的依据 —— 陈述里那句「由幂集公理，$\mathcal{P}(X)$ 确实是集合」说的就是它。

#### 定义引用：「选择公理」→ 基数可比定理　`def-link.choice-cardinal-comparable`

基数可比定理的前提里点名了**选择公理**：没有它，两个基数未必比得出大小。

#### 定义引用：「距离空间」→ 可数积的 Borel 代数　`def-link.metric-borel-product`

设 $X_1, X_2, \ldots$ 是**距离空间**，$X = \prod_j X_j$ 配以积度量 —— 投影连续、球与可分性都在距离空间里说。

#### 定义引用：「符号测度」→ 全变差的基本性质　`def-link.signed-total-variation`

设 $\nu$ 是**符号测度**，$|\nu|$ 是它的全变差。

#### 定义引用：「复测度」→ 全变差的基本性质　`def-link.complex-total-variation`

同一条命题对**复测度**也适用（全变差对两者定义一致）。

#### 定义引用：「几乎处处」→ MCT（a.e. 版本）　`def-link.ae-mct-ae`

前提放宽成「对**几乎处处**的 $x$ 有 $f_n \uparrow f$」—— 这就是这条推论与 MCT 的唯一区别。

#### 定义引用：「几乎处处」→ 积分为零 ⟺ 几乎处处为零　`def-link.ae-integral-zero`

结论「$f = 0$ **几乎处处**」里的 a.e. 就是它。

#### 定义引用：「几乎处处」→ 完备性 ⟺ 不破坏可测性　`def-link.ae-complete-measurable`

**(a)** 的 $f = g$ 与 **(b)** 的 $f_n \to f$ 都是在 **a.e.** 意义下说的。

#### 定义引用：「几乎处处」→ 完备化后可改在零集上　`def-link.ae-completion-measurable-fn`

结论 $f = g$ 是 $\bar{\mu}$-**a.e.** 成立的。

#### 定义引用：「几乎处处」→ 依测度 Cauchy ⟹ 收敛　`def-link.ae-cauchy-in-measure`

结论里抽出的子列是**几乎处处**收敛的。

#### 定义引用：「几乎处处」→ 单调函数几乎处处可导　`def-link.ae-monotone-differentiable`

结论是 $F$ 与 $G$ 都 **a.e. 可导**且导数 a.e. 相等。

#### 定义引用：「几乎处处」→ Fatou 的推论　`def-link.ae-fatou`

前提「$f_n \to f$ **a.e.**」与 Fatou 引理的差别就在这里。

#### 定义引用：「可积 / L¹」→ 何时两个函数积分处处相同　`def-link.integrable-integrals-equal`

前提 $f, g \in L^1(\mu)$ 说的是两个函数都**可积**。

#### 定义引用：「可积 / L¹」→ L^∞ 的性质　`def-link.integrable-linf`

**(a)** 里出现的 $f \in L^1$ 就是**可积**。

#### 定义引用：「可积 / L¹」→ NBV 函数的导数与测度的关系　`def-link.integrable-nbv-derivative`

结论 $F' \in L^1(m)$ 说的是**可积**。

#### 定义引用：「可积 / L¹」→ 积出来的函数是 AC · NBV　`def-link.integrable-integral-is-ac-nbv`

**(1)** 的前提 $f \in L^1(m)$ 是**可积**。

#### 定义引用：「子集」→ 关系　`def-dep.subset-rel`

关系是 $A \times B$ 的**子集**，定义域 $\operatorname{dom} R$ 与值域 $\operatorname{ran} R$ 也都是子集。

#### 定义引用：「关系」→ 函数　`def-dep.rel-function`

函数是**特殊的关系**：只多要求「每个输入的输出唯一」。

#### 定义引用：「关系」→ 偏序集　`def-dep.rel-poset`

偏序 $\preceq$ 是 $A$ 上的**二元关系**——先有关系，才有「自反、反对称、传递」这三条。

#### 定义引用：「子集」→ 链　`def-dep.subset-chain`

链是 $P$ 的**子集**，只是额外要求两两可比。

#### 定义引用：「子集」→ 界与确界　`def-dep.subset-bound`

上界与极大元都是相对于 $S \subseteq P$ 说的，条件用 $\preceq$ 写成。

#### 定义引用：「子集」→ 良序集　`def-dep.subset-wellorder`

「$W$ 的每个非空**子集**都有最小元」——良序性是靠子集量词说出来的。

#### 定义引用：「子集」→ 向量空间的基　`def-dep.subset-vs`

「$S$ 的每个**有限子集**都线性无关」——线性无关性是逐有限子集定义的。

#### 定义引用：「有限特征」→ 向量空间的基　`def-dep.finchar-vs`

正因为逐有限子集定义，线性无关性**具有有限特征**（注里点明了这一步）。

#### 定义引用：「函数」→ 距离空间　`def-dep.function-metric-space`

距离 $d : X \times X \to [0, +\infty)$ 是一个**函数**，记号 $d(x, y)$ 用的就是函数值。

#### 定义引用：「距离空间」→ 完备　`def-dep.metric-complete`

Cauchy 列与收敛都是**关于距离空间** $(X, d)$ 说的。

#### 定义引用：「距离空间」→ 全有界　`def-dep.metric-totally-bounded`

$\varepsilon$ 网与开球 $B(x, \varepsilon)$ 都定义在距离空间上。

#### 定义引用：「距离空间」→ 列紧　`def-dep.metric-seq-compact`

「子列收敛到 $X$ 中的点」里的收敛，用的就是这个 $d$。

#### 定义引用：「距离空间」→ 紧　`def-dep.metric-compact`

这一条陈述在距离空间 $(X, d)$ 上，开覆盖用的是由 $d$ 诱导的开集。

#### 定义引用：「子集」→ 基本类　`def-dep.subset-fundamental-class`

$\mathfrak{A} \subseteq \mathcal{P}(X)$：基本类首先是一族**子集**。

#### 定义引用：「子集」→ 环与代数　`def-dep.subset-set-ring`

同理，环与代数也是 $\mathcal{P}(X)$ 的一族**子集**。

#### 定义引用：「子集」→ 单调类　`def-dep.subset-monotone-class`

单调类同样是 $\mathcal{P}(X)$ 的一族**子集**。

#### 定义引用：「单调类」→ 生成的 σ-代数　`def-dep.monotone-generated-sigma`

这条同时定义 $\mathcal{M}(\mathcal{E})$ 与 $\mathfrak{m}(\mathcal{E})$——后者就是**由 $\mathcal{E}$ 生成的单调类**。

#### 定义引用：「函数」→ 积 σ-代数　`def-dep.function-product-sigma`

投影 $\pi_\alpha$ 是**函数**，柱集 $\pi_\alpha^{-1}(E_\alpha)$ 用的是逆像。

#### 定义引用：「σ-代数」→ 测度　`def-dep.sigma-algebra-measure`

测度是定义在**$\sigma$ 代数** $\mathcal{M}$ 上的函数 $\mu : \mathcal{M} \to [0, +\infty]$。

#### 定义引用：「环与代数」→ 预测度　`def-dep.set-ring-premeasure`

预测度的定义域只是一个**环**，不必是 $\sigma$ 代数。

#### 定义引用：「测度」→ 预测度　`def-dep.measure-premeasure`

「仍满足**测度的两条**」——预测度就是把测度的定义域从 $\sigma$ 代数放宽到环。

#### 定义引用：「测度」→ 有限可加测度　`def-dep.measure-finitely-additive`

把测度的**可数**可加降成**有限**可加，就是有限可加测度。

#### 定义引用：「测度」→ 零集与完备　`def-dep.measure-null-set`

$\mu$ 零集是「$\mu(E) = 0$ 的可测集」，$E$ 与 $\mu$ 都来自**测度空间**。

#### 定义引用：「子集」→ 外测度　`def-dep.subset-outer-measure`

外测度定义在**全体子集**上：$\mu^* : \mathcal{P}(X) \to [0, +\infty]$。

#### 定义引用：「幂集 𝒫(X)」→ 外测度　`def-dep.powerset-outer-measure`

定义域是**幂集** $\mathcal{P}(X)$ —— 不是某个 $\sigma$-代数。

#### 定义引用：「扩充实数 [−∞,+∞]」→ 外测度　`def-dep.extreal-outer-measure`

取值落在**扩充实数** $[0, +\infty]$ 里：外测度可以取 $+\infty$（$\mathbb{R}$ 的 Lebesgue 测度就是）。

#### 定义引用：「扩充实数 [−∞,+∞]」→ 测度　`def-dep.extreal-measure`

测度也取值在 $[0, +\infty]$ 里 —— 「$\mu$ 是**测度**」这句话里的 $\mu$ 是映到扩充实数的。

#### 定义引用：「外测度」→ μ*-可测集　`def-dep.outer-carath`

「设 $\mu^*$ 是 $X$ 上的**外测度**」——可测性完全由 $\mu^*$ 一个对象定出来。

#### 定义引用：「Borel σ-代数」→ Lebesgue–Stieltjes 测度　`def-dep.borel-lebesgue-stieltjes`

$\mu_F$ 是 $\mathbb{R}$ 上的 **Borel 测度**：定义域是 $\mathfrak{B}_\mathbb{R}$。

#### 定义引用：「Borel σ-代数」→ 正则 Borel 测度　`def-dep.borel-regular`

正则性是**关于 Borel 测度**说的：外正则就是用开集去逼近 Borel 集。

#### 定义引用：「紧」→ 正则 Borel 测度　`def-dep.compact-regular`

第一条要求「$\nu(K) < \infty$ 对每个**紧集** $K$ 成立」。

#### 定义引用：「σ-代数」→ 可测函数　`def-dep.sigma-algebra-measurable-fn`

可测空间 $(X, \mathcal{M})$ 就是「集合 $+$ $\sigma$ 代数」；可测性说的是原像落在 $\mathcal{M}$ 里。

#### 定义引用：「可测函数」→ L⁺　`def-dep.measurable-fn-lplus`

$L^+$ 是「取值在 $[0, +\infty]$ 里的**可测**函数」全体。

#### 定义引用：「测度」→ L⁺　`def-dep.measure-lplus`

$L^+$ 要**先固定一个测度空间** $(X, \mathcal{M}, \mu)$ 才谈得上。

#### 定义引用：「测度」→ 简单函数的积分　`def-dep.measure-integral-simple`

加权和 $\sum_j a_j \, \mu(E_j)$ 里的 $\mu$ 是**测度**。

#### 定义引用：「L⁺」→ 非负函数的积分　`def-dep.lplus-integral-nonneg`

定义写成 $\int f := \sup \{ \int \varphi : 0 \le \varphi \le f \}$，其中 $f \in L^+$。

#### 定义引用：「非负函数的积分」→ 复函数的积分　`def-dep.nonneg-integral-complex`

正负部的积分 $\int f^+$ 与 $\int f^-$ 用的都是**非负函数的积分**。

#### 定义引用：「非负函数的积分」→ 可积 / L¹　`def-dep.nonneg-integral-integrable`

可积的判据 $\int |f| < \infty$ 是一个非负函数的积分。

#### 定义引用：「复函数的积分」→ 可积 / L¹　`def-dep.integral-complex-integrable`

实值情形要先拆成正负部（复函数的积分），再要求这两个积分都有限。

#### 定义引用：「可测函数」→ 五种收敛　`def-dep.measurable-fn-convergence`

五种收敛里的 $f_n$ 与 $f$ 都要求**可测**。

#### 定义引用：「测度」→ 五种收敛　`def-dep.measure-convergence`

a.e. 收敛与依测度收敛里的零集、$\mu(\{\cdots\}) $ 都用**测度**。

#### 定义引用：「可积 / L¹」→ 五种收敛　`def-dep.integrable-convergence`

$L^1$ 收敛是 $\int |f_n - f| \to 0$，用到**可积**这个概念。

#### 定义引用：「可测函数」→ 依测度 Cauchy　`def-dep.measurable-fn-cauchy-in-measure`

依测度 Cauchy 是**可测函数列**的性质。

#### 定义引用：「测度」→ 依测度 Cauchy　`def-dep.measure-cauchy-in-measure`

定义里的 $\mu(\{\cdots\})$ 是测度。

#### 定义引用：「测度」→ 乘积测度　`def-dep.measure-product-measure`

$\mu \times \nu$ 是由两个**测度** $\mu$、$\nu$ 造出来的。

#### 定义引用：「外测度」→ 乘积测度　`def-dep.outer-product-measure`

扩张这一步：$\mu_{0}$ **诱导出 $X \times Y$ 上的外测度**，再限制到积 $\sigma$ 代数上。

#### 定义引用：「子集」→ 截口　`def-dep.subset-section`

截口 $E_x = \{ y : (x, y) \in E \}$ 是**子集**（$E \subseteq X \times Y$）。

#### 定义引用：「σ-代数」→ 符号测度　`def-dep.sigma-algebra-signed-measure`

符号测度定义在**可测空间** $(X, \mathcal{M})$ 上。

#### 定义引用：「测度」→ 符号测度　`def-dep.measure-signed-measure`

例 1 直接把符号测度写成两个**测度**之差 $\nu = \mu_1 - \mu_2$。

#### 定义引用：「零集与完备」→ 相互奇异　`def-dep.null-set-mutually-singular`

相互奇异要求「$E$ 是 $\mu$ **零集**、$F$ 是 $\nu$ 零集」。

#### 定义引用：「测度」→ 相互奇异　`def-dep.measure-mutually-singular`

$\mu$ 与 $\nu$ 本身是（符号）**测度**。

#### 定义引用：「零集与完备」→ 绝对连续　`def-dep.null-set-absolute-continuity`

$\nu \ll \mu$ 的定义是「每个 $\mu$ **零集**都是 $\nu$ 零集」。

#### 定义引用：「符号测度」→ 绝对连续　`def-dep.signed-measure-absolute-continuity`

这里的 $\nu$ 是一个**符号测度**。

#### 定义引用：「绝对连续」→ RN 导数与 Lebesgue 分解　`def-dep.ac-rn-derivative`

RN 导数 $d\nu/d\mu$ 就是在 $\nu \ll \mu$ 的前提下取到的那个 $f$。

#### 定义引用：「相互奇异」→ RN 导数与 Lebesgue 分解　`def-dep.mutually-singular-rn-derivative`

Lebesgue 分解 $\nu = \lambda + \rho$ 里的奇异部分要求 $\lambda \perp \mu$。

#### 定义引用：「测度」→ RN 导数与 Lebesgue 分解　`def-dep.measure-rn-derivative`

定理要求 $\nu \ll \mu$ 且两者都 $\sigma$ 有限——$\sigma$ 有限性是关于**测度**的。

#### 定义引用：「σ-代数」→ 复测度　`def-dep.sigma-algebra-complex-measure`

复测度同样定义在**可测空间** $(X, \mathcal{M})$ 上。

#### 定义引用：「测度」→ 复测度　`def-dep.measure-complex-measure`

复测度是照着**测度**改写取值的：$\nu : \mathcal{M} \to \mathbb{C}$。

#### 定义引用：「符号测度」→ 复测度　`def-dep.signed-complex-measure`

注里逐条与**符号测度**对照：复测度自动有限、级数自动绝对收敛。

#### 定义引用：「可测函数」→ 局部可积　`def-dep.measurable-fn-locally-integrable`

局部可积的对象是**可测函数** $f : \mathbb{R}^n \to \mathbb{C}$。

#### 定义引用：「可积 / L¹」→ 局部可积　`def-dep.integrable-locally-integrable`

判据 $\int_K |f| < \infty$ 与 $L^1$ 的可积判据同源，只是把整个空间换成有界可测集 $K$。

#### 定义引用：「测度」→ 平均算子 Aᵣ　`def-dep.measure-average-operator`

平均值里的 $m(B(r, x))$ 是 **Lebesgue 测度**。

#### 定义引用：「局部可积」→ Lebesgue 集　`def-dep.locally-integrable-lebesgue-set`

「设 $f \in L^1_{loc}$」——Lebesgue 集只对**局部可积**函数谈。

#### 定义引用：「平均算子 Aᵣ」→ Lebesgue 集　`def-dep.average-operator-lebesgue-set`

定义里的那个平均 $\frac{1}{m(B)}\int_B |f(y) - f(x)| dy$ 就是**平均算子**的样子。

#### 定义引用：「Borel σ-代数」→ 可缩族　`def-dep.borel-shrinks-nicely`

要求 $\{ E_r \}$ 是一族 **Borel 子集**，这样 $m(E_r)$ 才有意义。

#### 定义引用：「子集」→ 可缩族　`def-dep.subset-shrinks-nicely`

第一条是 $E_r \subseteq B(r, x)$——一个**子集**关系。

#### 定义引用：「偏序集」→ 实数系 ℝ　`def-dep.poset-real`

实数系是一个**全序**域：序公理里说的「全序」就是偏序再加上可比性。

#### 定义引用：「扩充实数 [−∞,+∞]」→ 共轭指数　`def-dep.extended-conjugate`

共轭指数里 $p = \infty$ 要配 $q = 1$，约定 $1/\infty = 0$ —— 用到了**扩充实数**。

#### 定义引用：「有界变差 BV」→ NBV　`def-dep.bv-nbv`

$NBV := \{ F \in BV : F$ 右连续且 $F(-\infty) = 0 \}$，整个定义建立在**有界变差**之上。

#### 定义引用：「Borel σ-代数」→ NBV　`def-dep.borel-nbv`

加这两个条件的目的，是与 $\mathbb{R}$ 上的**复 Borel 测度**一一对应。

#### 定义引用：「可测函数」→ L^p 范数　`def-dep.measurable-fn-lp-norm`

$L^p$ 的元素要求 $f$ **可测**且 $\|f\|_p < \infty$。

#### 定义引用：「测度」→ L^p 范数　`def-dep.measure-lp-norm`

$\|f\|_p$ 里的积分是对**测度** $\mu$ 取的。

#### 定义引用：「非负函数的积分」→ L^p 范数　`def-dep.nonneg-integral-lp-norm`

$\|f\|_p = \left[ \int |f|^p \, d\mu \right]^{1/p}$ 用的是**非负函数的积分**。

#### 定义引用：「测度」→ 本性上界与 L^∞　`def-dep.measure-essential-sup`

定义里出现 $\mu(\{ |f| > a \}) = 0$，用的是**测度**。

#### 定义引用：「零集与完备」→ 本性上界与 L^∞　`def-dep.null-set-essential-sup`

「把 $f$ 在**零集**上的取值统统不算」——这正是本性上界的意思。

#### 定义引用：「可测函数」→ 本性上界与 L^∞　`def-dep.measurable-fn-essential-sup`

$L^\infty$ 的元素是**可测**且本性上界有限的函数。

#### 定义引用：「L^p 范数」→ 对偶配对 φ_g　`def-dep.lp-norm-duality-map`

$\varphi_g$ 定义在 $L^p$ 上，有界性要靠范数 $\|f\|_p$ 来说。

#### 定义引用：「共轭指数」→ 对偶配对 φ_g　`def-dep.conjugate-duality-map`

「设 $p, q$ **共轭**，$g \in L^q$」——共轭指数是这条定义的前提。

#### 定义引用：「复函数的积分」→ 对偶配对 φ_g　`def-dep.integral-complex-duality-map`

$\varphi_g(f) = \int f g \, d\mu$ 本身是一个**积分**。

#### 定义引用：「本性上界与 L^∞」→ 对偶配对 φ_g　`def-dep.essential-sup-duality-map`

$g \in L^\infty$ 那一头（$p = 1$）要用本性上界。

#### 定义引用：「函数」→ 可测函数　`def-dep.function-measurable-function`

可测性的载体是**函数** $f : X \to Y$ —— 先有函数，才谈得上「每个可测集的原像可测」。

#### 定义引用：「符号测度」→ 正则 Borel 测度　`def-dep.signed-regular-measure`

「**符号测度** $\nu$ 叫正则 $\iff$ $|\nu|$ 正则」—— 正则性是借助符号测度说的。

#### 定义引用：「复测度」→ 正则 Borel 测度　`def-dep.complex-regular-measure`

同一条对**复测度**再说一遍。

#### 定义引用：「距离空间」→ 可缩族　`def-dep.metric-shrinks-nicely`

「$E_r \subseteq B(r, x)$」里的 $B(r, x)$ 是**距离空间**里的球。

#### 定义引用：「测度」→ 可缩族　`def-dep.measure-shrinks-nicely`

「$m(E_r) > \alpha \cdot m(B(r, x))$」里的 $m$ 是一个**测度**。

#### 定义引用：「L⁺」→ 简单函数的积分　`def-dep.lplus-integral-simple`

标准形式写的是「$\varphi \in L^+$ 是简单函数」—— 定义域落在 $L^+$ 里。

### 弱边（类比 / 思想相通）

> ⚠️ 这些**不是**逻辑蕴含，只在「卡住了、想找远房关系」时用。

#### 笛卡尔积存在 ～ 自然数集存在　`ana.sep-container`
*「幂集造容器 + 分离筛内容」——同一个证明模板*

这两个证明的骨架**一模一样**，只是塞进去的东西不同：

**$\omega$ 的构造**：先用幂集公理做出 $\mathcal{P}(I)$；再从里面**筛出**所有归纳子集，取交。

**$A \times B$ 的构造**：先用幂集公理做出 $\mathcal{P}(\mathcal{P}(A \cup B))$；再从里面**筛出**那些形如 (a,b) 的元素。

**共同的招**：集合论里「我想造一个由某种东西组成的集合」时，
永远不能直接写 `$\{ x : \varphi (x) \}$`（那是罗素悖论）。正确的姿势是两步——
**先找一个确定足够大的容器，再用分离公理模式从里面挑**。

💡 看到「想造一个集合但不知道怎么下手」时，回来想想这两步。

#### 有限特征 ～ 良序集　`ana.tame-infinite`
*两种「用有限/最小的东西控制无穷」的手法*

两个定义都在回答同一个问题：**面对一个无穷对象，怎么下手？**

**良序**（`def.wellorder`）：要求「每个非空子集都有**最小元**」。
有了最小元，就能做超限归纳、超限递归 —— 把「一步」规范化，无穷就被结构化了。

**有限特征**（`def.finchar`）：要求「整体属于 $\mathcal{A} \iff$ 每个**有限**子集都属于 $\mathcal{A}$」。
于是验证一个无穷对象，只需要逐个检查它的有限片段 —— 无穷被压缩成有限。

**共同的招**：都不去正面描述无穷，而是找一个**有限的抓手**
（一个最小元 / 一个有限子集），让无穷变得可验证、可操作。

💡 这个招在数学里到处都是（紧致性、有限生成、可数逼近……）。

#### 分离公理模式 ～ 有限特征　`ana.filter-sieve`
*「不描述整体，只给一个筛子」*

两者都不回答「这个集合里**有什么**」，只回答「**怎么判断**一个东西在不在里面」。

- 分离公理模式：`$x \in B \iff (x \in A \wedge \varphi (x))$` —— 给的是**判定条件**，不是元素清单。
- 有限特征：`$X \in \mathcal{A} \iff X$ 的每个有限子集属于 $\mathcal{A}$` —— 同样是判定条件。

**为什么这个思路重要**：集合常常是无穷的，没法列举；
但只要给出判定条件，「这个元素属不属于」就成了一个可回答的问题。
数学里绝大多数「定义」本质上都是这一类 —— 给条件，不给清单。

💡 读一个新定义时，先问自己：它给的是**构造**还是**判定条件**？

#### 有限特征 ～ 向量空间的基　`ana.maximal-apparatus`
*「有限特征」这个抽象概念，在向量空间里有一个现成的实例*

严格说这不只是类比 —— 它是一个**实例**，但方向不是逻辑蕴含：
`def.finchar` 不推出 `def.vs`，`def.vs` 也不推出 `def.finchar`；
它们是「抽象工具」和「具体落地」的关系。

线性无关性恰好是有限特征的：
「$S$ 线性无关 $\iff S$ 的每个**有限**子集线性无关」——
这就是 `def.finchar` 的定义，一字不差。

**所以「每个向量空间有基」的证明里，那个「链的并仍线性无关」的关键一步，
本质上是在验证有限特征在链条下保持。** Tukey 引理正是为此而生的。

💡 这条边是「跨星团」的：序理论 $\leftrightarrow$ 抽象代数。
它不提供新的定理，但它告诉你**两块内容为什么长得像**。

#### 生成的 σ-代数 ～ 向量空间的基　`ana.generated-closure`
*「取一切包含它的 X 之交」——生成同一个模板*

两处都在做同一件事：**给定一点种子，造出包含它的最小结构**。

- **生成的 $\sigma$-代数**：$\mathcal{M}(\mathcal{E}) = \bigcap \{ \mathfrak{A} : \mathfrak{A} \supseteq \mathcal{E},\ \mathfrak{A}$ 是 $\sigma$-代数 $\}$。
- **由 $S$ 生成的子空间 / 张成**：$\operatorname{span} S = \bigcap \{ W : W \supseteq S,\ W$ 是子空间 $\}$。

**共同的招**：不直接写「最小的那个」，而是**取一切候选之交** —— 交封闭保证了交出来还是同类结构，
$\mathcal{P}(X)$（或整个空间）保证了候选族不空。这两句话就是良定义性证明的全部。

**为什么值得记**：凡是要「造最小的封闭结构」（子群、理想、闭包、$\sigma$-代数、$\sigma$-环），
都是这个模板；反过来，验证一个「包含关系」时，也总是把两边都化成「交」。

💡 跨星团：测度的构造 $\leftrightarrow$ 抽象代数。

#### 单调收敛定理 ～ 级数收敛　`ana.sup-extension`
*都是「取上确界」：把无穷一次性握在手里*

两处的定义/证明核心是**同一个动作**：

- **非负项级数**：$\sum_{n} a_n := \sup_N s_N$ —— 不去「求极限」，直接取部分和的上确界。
- **单调收敛定理**：$\int f = \lim \int f_n$，而证明正是把两边都写成 $\sup$ 再交换（$\sup$ 与 $\sup$ 交换，不需要任何条件）。

**共同的招**：只要是**单调递增**的，就不必讨论极限存在性 —— 上确界在 $[0, +\infty]$ 里永远存在，
于是「求极限」这一步被绕过去了。这就是为什么 MCT 的证明条件最少、最好用。

**反面**：一旦不再单调（Fatou、控制收敛），就必须补「可积控制」这种额外条件 —— 因为那时取不到 $\sup$ 了。

💡 看到「极限不知道存不存在」时，先问：能不能改成单调的，然后取上确界？

#### 极大函数 ～ 有限特征　`ana.coarse-control`
*用一个「更粗但可控」的量，把无穷握在手里*

两处都在面对一个无法逐个处理的无穷对象，做法都是**换一个更粗的量去控制它**：

- **极大函数**：逐点值 $f(x)$ 没法控制（可以随便改零集上的取值），改成 $Hf(x) = \sup_r A_r |f|(x)$ ——
  它更大、更粗，但**可测**、有极大不等式，于是逐点问题化归为测度估计。
- **有限特征**：整体 $X \in \mathcal{A}$ 没法验证，改成「每个有限子集都行」——
  条件更粗，但可以用有限手段逐条查。

**共同的招**：**牺牲精度换可控性**。粗的量先拿下，细的问题再还回去
（极大不等式 $\to$ Lebesgue 微分定理；有限特征 $\to$ Tukey 引理）。

💡 卡在「无穷没法遍历」时，问：有没有一个更粗的、可测/可验证的量，能把这件事包住？

#### 佐恩引理 ～ ℝ 是完备有序域　`ana.sup-vs-maximal`
*佐恩引理与确界原理：都是「一次把无穷过程走完」*

两个命题的精神酷似，而且都不是构造性的：

- **确界原理**（$\mathbb{R}$ 的完备性）：非空有上界的集合，$\sup S$ **直接存在** —— 不需要你去逼近。
- **佐恩引理**：每个链有上界的偏序集，**极大元直接存在** —— 不需要你去一步步往上爬。

**共同的招**：把「无限步的过程」压缩成「一个对象的存在性」，然后直接取用它。
有了它，分析里可以取上确界、代数里可以取极大理想、集合论里可以取极大链。

⚠ 差异也要记住：确界原理是 $\mathbb{R}$ 的**完备性**，由 $\mathbb{R}$ 的构造证出来，
佐恩引理等价于**选择公理** —— 前者在一个具体的全序集里工作，后者在任意的偏序集里工作，代价是多了一个公理。

💡 这也解释了为什么「实数完备」与「选择公理」在证明里长得像：它们是同一类存在性工具。

---

## 星团级连接（整块对整块）

- **集合的构造 ↔ ZFC 公理系统**　10 条节点级连线
- **选择原理 ↔ 基数与等势**　3 条节点级连线
- **乘积测度与 Fubini ↔ 集合族与 σ-代数**　6 条节点级连线
- **测度的构造 ↔ 集合族与 σ-代数**　5 条节点级连线
- **可测函数与收敛 ↔ 测度的构造**　10 条节点级连线
- **可测函数与收敛 ↔ 乘积测度与 Fubini**　2 条节点级连线
- **可测函数与收敛 ↔ 集合族与 σ-代数**　2 条节点级连线
- **积分 ↔ 可测函数与收敛**　8 条节点级连线
- **积分 ↔ 测度的构造**　11 条节点级连线
- **测度的构造 ↔ 乘积测度与 Fubini**　6 条节点级连线
- **积分 ↔ 乘积测度与 Fubini**　2 条节点级连线
- **乘积测度与 Fubini ↔ 集合的构造**　3 条节点级连线
- **乘积测度与 Fubini ↔ 关系与函数**　2 条节点级连线
- **积分 ↔ 符号测度与分解**　5 条节点级连线
- **测度的构造 ↔ 符号测度与分解**　8 条节点级连线
- **微分定理 ↔ 积分**　3 条节点级连线
- **微分定理 ↔ 符号测度与分解**　4 条节点级连线
- **有界变差与绝对连续 ↔ 符号测度与分解**　5 条节点级连线
- **有界变差与绝对连续 ↔ 测度的构造**　2 条节点级连线
- **有界变差与绝对连续 ↔ 积分**　4 条节点级连线
- **积分 ↔ L^p 空间**　4 条节点级连线
- **实数与极限 ↔ 数系的构造**　6 条节点级连线
- **实数与极限 ↔ 序结构**　2 条节点级连线
- **集合的构造 ↔ 关系与函数**　3 条节点级连线
- **基数与等势 ↔ 关系与函数**　4 条节点级连线
- **基数与等势 ↔ 数系的构造**　4 条节点级连线
- **测度的构造 ↔ 实数与极限**　3 条节点级连线
- **有界变差与绝对连续 ↔ 实数与极限**　3 条节点级连线
- **L^p 空间 ↔ 数系的构造**　2 条节点级连线
- **基数与等势 ↔ 集合的构造**　2 条节点级连线
- **集合族与 σ-代数 ↔ 集合的构造**　4 条节点级连线
- **测度的构造 ↔ 集合的构造**　3 条节点级连线
- **集合的构造 ↔ 拓扑空间**　3 条节点级连线
- **拓扑空间 ↔ 度量空间**　3 条节点级连线
- **数系的构造 ↔ 关系与函数**　5 条节点级连线
- **代数结构 ↔ 数系的构造**　5 条节点级连线
- **序结构 ↔ 序数与超限**　3 条节点级连线
- **基数与等势 ↔ 序数与超限**　3 条节点级连线
- **序数与超限 ↔ ZFC 公理系统**　2 条节点级连线
- **一阶语言与公式 ↔ ZFC 公理系统**　3 条节点级连线
- **序结构 ↔ 集合的构造**　4 条节点级连线
- **选择原理 ↔ 序结构**　7 条节点级连线
- **微分定理 ↔ 度量空间**　3 条节点级连线
- **微分定理 ↔ 测度的构造**　3 条节点级连线
- **L^p 空间 ↔ 可测函数与收敛**　3 条节点级连线
- **L^p 空间 ↔ 测度的构造**　4 条节点级连线
- **向量空间的基 ↔ 序结构**　2 条节点级连线
- **微分定理 ↔ 集合族与 σ-代数**　2 条节点级连线
- **集合族与 σ-代数 ↔ 符号测度与分解**　2 条节点级连线
