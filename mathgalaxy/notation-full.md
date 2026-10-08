# 数学星图 · 记号对照表

全图数学记号的写法。同一星团内一个符号只有一个含义；跨星团同名不同义在表里注明。

### 逻辑与集合

- `\forall` ∀　**全称量词**
- `\exists` ∃　**存在量词**
- `\exists!` ∃!　**唯一存在**
- `\neg` ¬　**否定（对象语言）**
- `\wedge` ∧　**合取（对象语言）**
- `\vee` ∨　**析取（对象语言）**
- `\to` →　**蕴含（对象语言）/ 趋于 / 映射**
- `\leftrightarrow` ↔　**等价（对象语言）** — 只用于公理 / 公式内部
- `\implies` ⟹　**推出（元语言）**
- `\iff` ⟺　**当且仅当（元语言）**
- `\Longleftarrow` ⟸　**反向证明的方向标记（配 `$(\implies)$`）**
- `\langle \mathbb{N}, \le \rangle` ⟨ℕ,≤⟩　**「集合 + 结构」的配对写法**
- `\models` ⊨　**满足**
- `\vdash` ⊢　**可证明**
- `\in` ∈　**属于**
- `\notin` ∉　**不属于**
- `\subseteq` ⊆　**包含（允许相等）**
- `\subset` ⊂　**真包含（不含相等）**
- `\supseteq` ⊇　**反向包含（允许相等）**
- `\supset` ⊃　**反向真包含**
- `\cup` ∪　**二元并**
- `\cap` ∩　**二元交**
- `\setminus` ∖　**差集**
- `A^{c}` Aᶜ　**补集（相对全集 $X$）**
- `\bigcup` ⋃　**族的并**
- `\bigcap` ⋂　**族的交**
- `\bigsqcup` ⨆　**可数不交并**
- `\emptyset` ∅　**空集**
- `\mathcal{P}(X)` 𝒫(X)　**幂集** — `2^{X}` 只用于基数幂 / 函数集
- `\{ a, b \}` {a,b}　**集合**
- `(a, b)` (a,b)　**有序对**
- `A / \sim` A/~　**商集**
- `[a]` [a]　**等价类**
- `\sim` ∼　**等价关系 / 等价**
- `\times` ×　**笛卡尔积 / 乘积**
- `\{ x : \ldots \}`　**集合描述**
- `\rightrightarrows` ⇉　**一致收敛**
- `\hookrightarrow` ↪　**单射**
- `\upharpoonright` ↾　**限制 $f \upharpoonright A$**

### 序、基数与序数

- `\preceq` ⪯　**一般偏序关系（抽象偏序集上的）** — 抽象偏序集上的序
- `\sqsubseteq` ⊑　**第二个偏序集上的序** — 只在对举两个偏序集时用
- `\prec` ≺　**严格关系**
- `\le` ≤　**序 / 大小**
- `\ge` ≥　**反向序**
- `\ne` ≠　**不等**
- `\sup S` sup S　**上确界**
- `\inf S` inf S　**下确界**
- `(P, \preceq)`　**偏序集**
- `(W, \preceq)`　**良序集**
- `(\alpha, \in)`　**序数（用属于关系排序）**
- `\mathrm{On}` On　**序数全体**
- `\operatorname{ot}(W)` ot(W)　**良序集的序型**
- `\omega` ω　**最小无限序数**
- `V_{\alpha}` V_α　**累积层级**
- `\aleph(X)` ℵ(X)　**Hartogs 数（$X$ 的）** — 与 $\aleph_0$ 同族，靠有没有参数区分
- `\aleph_0` ℵ₀　**可数无穷的基数**
- `|A|` |A|　**基数**

### 数系与分析基础

- `\mathbb{N}` ℕ　**自然数**
- `\mathbb{Z}` ℤ　**整数**
- `\mathbb{Q}` ℚ　**有理数**
- `\mathbb{R}` ℝ　**实数**
- `\mathbb{C}` ℂ　**复数**
- `\overline{\mathbb{R}}` ℝ̄　**扩充实数 $[ -\infty, +\infty ]$**
- `\mathbb{R}^{n}` ℝⁿ　**n 维欧氏空间**
- `(a, b]`　**半开区间（左开右闭）**
- `\varepsilon` ε　**正数 / ε–δ 里的 ε**
- `\delta` δ　**小量 / 增量**
- `|x|` |x|　**绝对值**
- `\|f\|_p` ‖f‖ₚ　**L^p 范数**
- `\lim_{n \to \infty}`　**数列极限**
- `\liminf` lim inf　**下极限**
- `\limsup` lim sup　**上极限**
- `\sum_{j=1}^{\infty}` Σ　**级数**
- `\prod` ∏　**乘积**
- `\mapsto` ↦　**映射到（$x \mapsto f(x)$）**
- `\cdot` ·　**乘法点**
- `\operatorname{Re}` Re　**实部**
- `\operatorname{Im}` Im　**虚部**
- `\bar{z}` z̄　**共轭**
- `f_n \uparrow f` ↑　**单调递增地趋于** — 集列同理：$E_n \uparrow X$；递减写 $\downarrow$
- `\nearrow, \searrow` ↗ ↘　**（集列 / 函数列）单调递增 / 递减**
- `\nrightarrow` ↛　**不趋于（$\int f_n = 1 \nrightarrow 0$）**
- `C \leftarrow C \cup \{ v \}` ←　**赋值：把左边更新成右边（＝「令…为…」）**

### 拓扑与度量

- `\mathcal{T}` 𝒯　**拓扑**
- `\mathcal{B}` ℬ　**拓扑的一组基**
- `\mathcal{S}` 𝒮　**子基**
- `d(x, y)`　**距离**
- `B(x, \varepsilon)`　**开球**
- `\mathfrak{B}_X` 𝔅_X　**Borel σ-代数**

### 测度与 σ-代数

- `\mu` μ　**测度**
- `\nu` ν　**第二个测度 / 待比较的测度** — 符号测度那一支里专指符号测度
- `\mu^{*}` μ*　**外测度**
- `\mu_{0}` μ₀　**预测度**
- `\rho` ρ　**预备函数 $\rho : \mathcal{E} \to [0, +\infty]$，$\rho(\emptyset) = 0$** — $\mathcal{E}$ 上用来定义外测度的预备函数
- `\mathcal{M}` ℳ　**σ-代数 / 可测集全体**
- `\mathcal{M}(\mathcal{E})` ℳ(ℰ)　**由 $\mathcal{E}$ 生成的 σ-代数**
- `\mathfrak{m}(\mathcal{E})` 𝔪(ℰ)　**由 $\mathcal{E}$ 生成的单调类** — 与 $\mathcal{M}(\mathcal{E})$ 成对
- `\mathcal{A}` 𝒜　**代数 / 集合族**
- `\mathfrak{A}` 𝔄　**代数 / 基本类** — 测度论里是代数 / 基本类；一阶逻辑里是一阶结构
- `\mathcal{E}` ℰ　**生成元集合族（「设 $\mathcal{E} \subseteq \mathcal{P}(X)$」）**
- `\mathcal{N}` 𝒩　**零集族或第二个空间的 σ-代数** — 测度的构造里是零集族；可测函数 / 乘积测度里是第二个空间的 $\sigma$ 代数
- `\mathcal{L}` ℒ　**Lebesgue σ-代数或一阶语言** — 分析里是 Lebesgue $\sigma$ 代数；一阶逻辑里是一阶语言
- `\mathcal{M} \otimes \mathcal{N}` ℳ⊗𝒩　**积 σ-代数**
- `\mu \times \nu` μ×ν　**乘积测度**
- `m` m　**$\mathbb{R}$ 上的 Lebesgue 测度**
- `\mu_{G}` μ_G　**单调函数 $G$ 诱导的 Borel 测度**
- `\text{a.e.}` a.e.　**几乎处处**
- `\nu^{+}, \nu^{-}, |\nu|`　**符号测度的正 / 负 / 全变差部分**
- `\lambda, \rho` λ, ρ　**RN 分解 $\nu = \lambda + \rho$** — RN 分解的两部分：$\lambda$ 奇异、$\rho$ 绝对连续
- `\ll` ≪　**绝对连续**
- `\perp` ⊥　**奇异 / 互相垂直**
- `\sigma` σ　**前缀：σ-环 / σ-代数 / σ-有限** — `title` 里作为术语前缀时保留 Unicode（`σ-代数`）
- `\mathfrak{B}` 𝔅　**Borel σ-代数**

### 积分与函数空间

- `\chi_{E}` χ_E　**特征函数**
- `L^{+}` L⁺　**非负可测函数全体**
- `\varphi` φ　**简单函数（$\varphi = \sum a_j \chi_{E_j}$）** — 一阶逻辑里是一阶公式
- `\psi` ψ　**与 $\varphi$ 配对的第二个函数**
- `\int \varphi \, d\mu` ∫　**积分**
- `L^{1}` L¹　**可积函数空间**
- `L^{p}, L^{q}`　**L^p 空间（$p, q$ 共轭指数）**
- `Hf` Hf　**极大函数**
- `d\nu / d\mu`　**Radon–Nikodym 导数**
- `\Phi` Φ　**连续线性泛函 $\Phi \in (L^{p})^{*}$**
- `\Sigma` Σ　**有限支集简单函数全体（`analysis.lp` 局部）**
- `\partial f / \partial t`　**偏导**

### 字母约定

- `\alpha` α　**序数 / 指标** — 局部义：微分里是阈值，积分里是复相位
- `\beta` β　**序数（配 $\alpha$）**
- `\gamma` γ　**序数（配 $\alpha$、$\beta$）/ 一般函数**
- `\pi` π　**投影 $\pi_{\alpha}$**
- `\theta` θ　**角度**
- `\tau` τ　**停时 / 一般函数（罕见）**
- `\zeta` ζ　**（罕见）**
- `\mathcal{C}` 𝒞　**证明内局部：Cauchy 列全体 / 递升集合族**
- `\mathcal{F}` ℱ　**证明内局部：部分选择函数全体 / 生成元族**
- `\mathcal{U}, \mathcal{V}`　**证明内局部：开覆盖 / 有限子覆盖**
- `\mathcal{D}` 𝒟　**证明内局部：链的族**
- `\mathcal{K}` 𝒦　**证明内局部：单调类定理里的试探集族**
- `\mathrm{ZFC}` ZFC　**公理系统名（名词 → `\mathrm{}`）**
