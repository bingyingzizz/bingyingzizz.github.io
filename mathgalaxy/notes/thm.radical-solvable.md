# 根式可解 与 伽罗瓦群可解　`thm.radical-solvable`　·　说明
根 `../`

⚠ **骨架**。两个方向各有一条主线，本图只记路线：

- **$\Leftarrow$（可解 $\implies$ 根式可解）**：把可解列 $G = G_{0} \trianglerighteq G_{1} \trianglerighteq \cdots \trianglerighteq \{e\}$ 翻译成域塔 $F = E_{0} \subseteq E_{1} \subseteq \cdots \subseteq K$，每一步商群是循环群；循环扩张在 char 0 下可以靠**添加单位根 + Kummer 理论**用开方实现。

- **$\implies$（根式可解 $\implies$ 可解）**：反过来，把根式塔翻译成群塔，用「循环扩张的伽罗瓦群是循环群」（这一步又靠伽罗瓦对应 + `thm.solvable-quotients`），拼出可解列。

⭐ **为什么必须 char 0**：可解 $\implies$ 根式那一步要用 $n$ 次单位根与 Kummer 理论；char $p$ 时 $x^{p} - x - a$ 这类 Artin–Schreier 扩张取代了纯开方扩张，结论要改写。

> 续见 notes/thm.radical-solvable.2.md
