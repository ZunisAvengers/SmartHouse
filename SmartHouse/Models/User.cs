﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartHouse.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Login { get; set; }
        public string Role { get; set; }
        public string Password { get; set; }
    }
}
